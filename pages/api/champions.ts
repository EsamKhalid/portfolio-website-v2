import Axios from "axios";

export default async function handler(req, res) {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.4.1/data/en_US/champion.json"
  );

  const data = await response.json();
  res.status(200).json(data.data);
}
