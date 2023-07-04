import { Source_Serif_4 } from "next/font/google";
import dbConnect from "../../../../../db/connect";
import Department from "../../../../../db/models/Department";
import Month from "../../../../../db/models/Month";
import Cookies from 'cookies'
export default async function handler(request, response) {
  await dbConnect();

  const _id = request.query.id
  // if (request.method === "PUT") {
  //   try {
  //     const updatedRows = request.body; // Extract the array of updated rows from the request body
  
  //     // Iterate over the updated rows and update each row individually
  //     const updatedMonthPromises = updatedRows.map(async (row) => {
  //       const { _id, Month_target, Weight, Organization, username, Evaluation, Weektwo_evaluationResult, Year_target_id } = row;
  
  //       // Find the Month document by ID and update its properties
  //       const updatedMonth = await Month.findByIdAndUpdate(
  //         _id,
  //         {
  //           Month_target:"jajden",
  //           Weight,
  //           Organization,
  //           username,
  //           Evaluation,
  //           Weektwo_evaluationResult,
  //           Year_target_id,
  //         },
  //         { new: true } // Return the updated document
  //       );
  
  //       return updatedMonth;
  //     });
  
  //     // Wait for all the updates to complete
  //     const updatedMonths = await Promise.all(updatedMonthPromises);
  
  //     response.json(updatedMonths); // Respond with the array of updated Month documents
  //     response.redirect("/weekly")
  //   } catch (error) {
  //     console.error(error);
  //     response.status(500).json({ error: "Internal server error" });
     
  //   }
    
  //}
  if (request.method === 'PUT') {
    const formData = request.body; // Extract the form data from the request body

    // Process the form data and update the weekly tasks
    formData.forEach((row) => {
      const { _id, evaluation } = row;

      // Update the corresponding row in your data source using the _id and evaluation value
      // Replace the following line with your own logic
      // Example: Update the evaluation field of the row with the matching _id
      const updatedRow = data.find((mon) => mon._id === _id);
      updatedRow.evaluation = evaluation;
    });

    // Send a response indicating success
    response.status(200).json({ message: 'Weekly tasks evaluated successfully' });
  } else {
    response.status(405).json({ error: 'Method Not Allowed' });
  }
}
