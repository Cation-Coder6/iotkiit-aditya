// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  console.log(req);
  res.statusCode = 200;
  const website = await fetch("http://100.24.85.44:1337/certificates/meh.txt");
  console.log(website.body);
  res.send(website.body);
};
