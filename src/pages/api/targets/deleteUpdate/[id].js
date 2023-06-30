import { Source_Serif_4 } from "next/font/google";
import dbConnect from "../../../../../db/connect";
import Department from "../../../../../db/models/Department";
import Target from "../../../../../db/models/Target";
import Cookies from 'cookies'
export default async function handler(request, response) {
  await dbConnect();
  

     const _id = request.query.id
    const cookies = new Cookies(request, response)
      if (request.method === "GET") {
    const data_exapmle='{"name":"John", "age":30, "car":null}';
    return res.status(200).json(data_exapmle);
  }
    if (request.method === "DELETE") {
      let product = await Target.findByIdAndDelete(_id);
    
        
        //const department = new Department({"Level_name":cookies.get('Organization')},{"Parent_department":cookies.get('Organization')},);
        //  departments.push(department)
        return response.status(200).json(product);
    }
    if (request.method === "PUT") {
      
      let product = await Target.findByIdAndUpdate(_id);
    
        
        //const department = new Department({"Level_name":cookies.get('Organization')},{"Parent_department":cookies.get('Organization')},);
        //  departments.push(department)
        return response.status(200).json(product);
    }
  }