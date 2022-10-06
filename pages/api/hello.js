// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  console.log(req);
  res.statusCode = 200;
  const website = await fetch("http://13.232.181.16/certificates/meh.txt");
  console.log(website.body);
  res.send(website.body);
};
