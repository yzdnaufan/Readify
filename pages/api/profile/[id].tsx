
import { NextApiRequest, NextApiResponse } from "next";
export default async GET(req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  res.send(id);
};