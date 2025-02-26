import Axios from "axios";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.4.1/data/en_US/champion.json"
  );

  const data = await response.json();
  res.status(200).json(data.data);
}
