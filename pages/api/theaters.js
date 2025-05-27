export default async function handler(req, res) {
  if (req.method === 'GET') {
    const theaters = await prisma.theater.findMany();
    res.status(200).json(theaters);
  } else if (req.method === 'POST') {
    const { name, location } = req.body;
    const theater = await prisma.theater.create({ data: { name, location } });
    res.status(200).json(theater);
  }
}