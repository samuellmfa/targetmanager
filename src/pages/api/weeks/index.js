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



  
  if (request.method === "PUT") {
    try {
      const updatedRows = request.body; // Extract the array of updated rows from the request body
  
      // Iterate over the updated rows and update each row individually
      
        // Find the Month document by ID and update its properties
        const updatedMonth = await Month.findByIdAndUpdate(
          _id,
          {
            Month_target,
            Weight,
            Organization,
            username,
            Evaluation,
            Weektwo_evaluationResult,
          },
          { new: true } // Return the updated document
        );
  
        return updatedMonth;
  
      // Wait for all the updates to complete
      const updatedMonths = await Promise.all(updatedMonthPromises);
  
      response.json(updatedMonths); // Respond with the array of updated Month documents
      response.redirect("/weekly")
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Internal server error" });
     
    }
    
  }
}
