import Cookies from 'cookies'
import clientPromise from "../../../lib/mongodb";
const {createHash} = require('node:crypto');

export default async function handler(req, res) {
  if (req.method == "POST"){
    const Organization = req.body['Organization']
    const username = req.body['username']
    const password = req.body['password']
    const passwordagain = req.body['passwordagain']
    if (password != passwordagain){
        res.redirect("/signup?msg=The two passwords don't match");
        return;
    }
    const client = await clientPromise;
    const db = client.db("Accounts");
    const users = await db.collection("profiles").find({"Username": username}).toArray();
    if (users.length > 0){
        res.redirect("/signup?msg=An Organization with this name already has been registered");
        return;
    }
    const password_hash = createHash('sha256').update(password).digest('hex');
    const currentDate = new Date().toUTCString();
    const bodyObject = {
        Organization:Organization,
        Username: username,
        Password: password_hash,
        Created: currentDate
    }
    await db.collection("profiles").insertOne(bodyObject);
    const cookies = new Cookies(req, res)
    cookies.set('username', username)
    res.redirect("/")
  } else {
    res.redirect("/signup?msg=An Organization with this name not registered correctly");
    // res.redirect("/")
  }
}