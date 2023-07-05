import dbConnect from "../../../../db/connect";
import Department from "../../../../db/models/Department";
import Cookies from 'cookies'
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const cookies = new Cookies(request, response)
    const departments = await Department.find({"Organization":cookies.get('Organization')});
    const department = new Department({"Level_name":cookies.get('Organization')},{"Parent_department":cookies.get('Organization')},);
    departments.push(department)
    return response.status(200).json(departments);
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
      response.redirect("/department");
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
