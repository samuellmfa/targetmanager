import { Source_Serif_4 } from "next/font/google";
import dbConnect from "../../../../db/connect";
import Department from "../../../../db/models/Department";
import Month from "../../../../db/models/Month";
import Cookies from 'cookies'
export default async function handler(request, response) {
  await dbConnect();

  // const { id } = request.query;
  if (request.method === "GET") {
    const cookies = new Cookies(request, response)
    const months = await Month.find({"Organization":cookies.get('Organization')});
    const departments = await Department.find({"Organization":cookies.get('Organization')});

   

    //const department = new Department({"Level_name":cookies.get('Organization')},{"Parent_department":cookies.get('Organization')},);
    //  departments.push(department)
    return response.status(200).json(months);
  }
  if (request.method === "POST") {

    try {
    //   const cookies = new Cookies(request, response)
    //   const departments = await Department.find({"Organization":cookies.get('Organization')});
  
     const month =new Month({
        "Month_target": " ",
        "Weight": 3,
        "Organization": "jadenbaba",
        "username": "samuel",
        "Perspective": "Financial",
        "isActive": "true",
        "Parent_plan": "mabila",
        "EvaluationResult": 20,
        "Evaluation": 1,
        "Year_target_id":"",
        "Weekone_plan": 'false',
        "Weektwo_plan": 'false',
        "Weekthree_plan": 'false',
        "Weekfour_plan": 'false',
        "Weekone_report": 0,
        "Weektwo_report": 0,
        "Weekthree_report": 0,
        "Weekfour_report": 0,
      
      });

      //the end
      await month.save();
      return response.status(201).json({ status: "month created." });
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
