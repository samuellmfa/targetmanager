import { Source_Serif_4 } from "next/font/google";
import dbConnect from "../../../../db/connect";
import Department from "../../../../db/models/Department";
import Target from "../../../../db/models/Target";
import Cookies from 'cookies'
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const cookies = new Cookies(request, response)
    const targets = await Target.find({"Organization":cookies.get('Organization')});
    const departments = await Department.find({"Organization":cookies.get('Organization')});

   const tar =new Target({
    "Year_target": "",
    "Weight": 3,
    "Organization": cookies.get('Organization'),
    "username": cookies.get('username'),
    "isActive": "true",
    "evaluationResult": 20,
    "evaluation": [{"0": "true","1": "true","2": "true","3": "true","4": "true","5": "true"}],
    "employees": [ ]
  })

  departments.map(dept => {
    tar.employees.push(      {
      "name": dept.Level_name,
      "username": dept.Level_name,
      "Jan": "false",
      "Feb": "false",
      "Mar": "false",
      "Apr": "false",
      "May": "false",
      "Jun": "false",
      "Jul": "false",
      "Aug": "false",
      "Sep": "false",
      "Oct": "false",
      "Nov": "false",
      "Dec": "false"
    })
    
  })
  targets.push(tar)

    //const department = new Department({"Level_name":cookies.get('Organization')},{"Parent_department":cookies.get('Organization')},);
    //  departments.push(department)
    return response.status(200).json(targets);
  }

  if (request.method === "POST") {
    try {
      const cookies = new Cookies(request, response)
      const departmentData = request.body;
       if(request.body.Level_Department ==="")
       {
        departmentData.Level_Department=request.body.Parent_department;
       }
      departmentData.Organization =cookies.get('Organization');
      const department = new Department(departmentData);
      await department.save();
      return response.status(201).json({ status: "department created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
