import dbConnect from "../../../db/connect";
import clientPromise from "../../../lib/mongodb";

export default async function handler(request, response) {
  if (request.method === "GET") {
    
    const client = await clientPromise;
    const db = client.db("Accounts");
    const Departments = await db.collection("Departments").find();
    return response.status(200).json(Departments);
  }
}
