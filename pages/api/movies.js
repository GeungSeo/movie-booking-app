export default async function handler(req, res) {
  if (req.method === 'GET') {
    const movies = await prisma.movie.findMany();
    res.status(200).json(movies);
  } else if (req.method === 'POST') {
    const { title, genre } = req.body;
    const movie = await prisma.movie.create({ data: { title, genre } });
    res.status(200).json(movie);
  }
}