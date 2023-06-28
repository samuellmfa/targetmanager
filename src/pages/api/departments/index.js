import dbConnect from "../../../../db/connect";
import Department from "../../../../db/models/Department";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const departments = await Department.find();
   
    return response.status(200).json(departments);
  }

  if (request.method === "POST") {
    console.log("data posted")
    try {
      const departmentData = request.body;
      const department = new Department(departmentData);
      await department.save();
      return response.status(201).json({ status: "department created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
