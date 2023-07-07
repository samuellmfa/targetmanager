// import Cookies from "cookies"
// import clientPromise from "../../../lib/mongodb";
// const {createHash} = require("node:crypto");

// export default async function handler(req, res) {
//   await dbConnect();
//   if (req.method === "GET") {
//     const data_exapmle="{"name":"John", "age":30, "car":null}";
//     return res.status(200).json(data_exapmle);
//   }
//   if (req.method == "POST"){
//     const name = req.body["name"]
//     const Title = req.body["Title"]
//     const Department = req.body["Department"]
//     const IsHead = req.body["IsHead"]
//     const username = req.body["username"]
//     const password = req.body["password"]
//     const passwordagain = req.body["passwordagain"]
//     if (password != passwordagain){
//         res.redirect("/signup?msg=The two passwords don"t match");
//         return;
//     }
//     const client = await clientPromise;
//     const db = client.db("Accounts");
//     const users = await db.collection("profiles").find({"Username": username}).toArray();
//     if (users.length > 0){
//         res.redirect("/signup?msg=An Employee with this username has already  been registered");
//         return;
//     }
//     const password_hash = createHash("sha256").update(password).digest("hex");
//     const currentDate = new Date().toUTCString();
//     const bodyObject = {
//         name:name,
//         Organization:req.Organization,
//         Department:Department,
//         IsHead:IsHead,
//         Title:Title,
//         Username: username,
//         Password: password_hash,
//         Created: currentDate
//     }
//     await db.collection("profiles").insertOne(bodyObject);
//     // const cookies = new Cookies(req, res)
//     // cookies.set("username", username)
//     res.redirect("/")
//   } else {
//     res.redirect("/")
//   }
// }
import Cookies from "cookies"
import dbConnect from "../../../../db/connect";
import Profile from "../../../../db/models/Profile";
const {createHash} = require("node:crypto");
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const profiles = await Profile.find();
   
    return res.status(200).json(profiles);
  }

  if (req.method === "POST") {

    try {
        const name = req.body["name"]
    const Title = req.body["Title"]
    const Department = req.body["Department"]
    const IsHead = !!req.body["IsHead"];
    const username = req.body["username"]
    const password = req.body["password"]
    const passwordagain = req.body["passwordagain"]
    if (password != passwordagain){
        res.redirect("/signup?msg=The two passwords dont&apos; match");
        return;
    }
    const users = await Profile.find({"Username": username});
    if (users.length > 0){
        res.redirect("/signup?msg=An Employee with this username has already  been registered");
        return;
    }
    const password_hash = createHash("sha256").update(password).digest("hex");
    const cookies = new Cookies(req, res)
    const currentDate = new Date().toUTCString();
    
        const bodyObject = {
        name:name,
        Organization:	cookies.get("Organization"),
        Department:Department,
        IsHead:IsHead,
        Title:Title,
        Username: username,
        Password: password_hash,
        Created: currentDate.toString()
    }
      const profileData = bodyObject;

      const profile = new Profile(profileData);
      await profile.save();
      
      res.redirect("/profile/employee");
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}