import Meed from "meed";
import fetch from "node-fetch";
export default async (req, res) => {
  const feed = new Meed({ fetch });

  const user = await feed.user("iot-lab");
  console.log(user);
  res.json(user);
};
