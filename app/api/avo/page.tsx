import { NextApiRequest, NextApiResponse } from "next";
import Database from "@/database/db";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new Database();
  const data = await db.getAll();

  return response.status(200).json(data)
};

export default allAvos;
