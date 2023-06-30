import { Source_Serif_4 } from "next/font/google";
import dbConnect from "../../../../db/connect";
import Department from "../../../../db/models/Department";
import Target from "../../../../db/models/Target";
import Cookies from 'cookies'
export default async function handler(request, response) {
  await dbConnect();

  // const { id } = request.query;
  if (request.method === "POST") {

    try {
      //this is the begining 
    //   const cookies = new Cookies(request, response)
    //   const departments = await Department.find({"Organization":cookies.get('Organization')});
  
     const target =new Target({
        "Year_target": " ",
        "Weight": 3,
        "Organization": "jadenbaba",
        "username": "samuel",
        "Perspective": "Financial",
        "isActive": "true",
        "Parent_plan": "mabila",
        "EvaluationResult": 20,
        "Evaluation": 1,
        "employees": [
          {
            "name": "samuel",
            "username": "samuel",
            "Jan": "true",
            "Feb": "true",
            "Mar": "true",
            "Apr": "true",
            "May": "true",
            "Jun": "true",
            "Jul": "true",
            "Aug": "true",
            "Sep": "true",
            "Oct": "true",
            "Nov": "true",
            "Dec": "true"
          },
          {
            "name": " kaku",
            "username": "kaku",
            "Jan": "true",
            "Feb": "true",
            "Mar": "true",
            "Apr": "true",
            "May": "true",
            "Jun": "true",
            "Jul": "true",
            "Aug": "true",
            "Sep": "true",
            "Oct": "true",
            "Nov": "true",
            "Dec": "true"
          }
        ]
      
      });

      //the end
      await target.save();
      return response.status(201).json({ status: "target created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
  else if (request.method === "DELETE") {
   
   try{
   // const id= request.body.id;
    const _id= "649eb2399b776f11ec92ef9e";
    //await Target.findByIdAndDelete(id)
    const cinema = await Target.findByIdAndDelete(_id);
   // await Target.findByIdAndDelete('649eb2399b776f11ec92ef9e')
   response.status(200).json({ status: "Product successfully deleted." });
   } 
   catch{
    
    return response.status(400).json({ error: "not here" });
   }
    
  }
}
