export default async function handler(req, res) {
  if (req.method === 'GET') {
    const screenings = await prisma.screening.findMany({
      include: { movie: true, theater: true }
    });
    res.status(200).json(screenings);
  } else if (req.method === 'POST') {
    const { movie_title, theater_name, show_date, show_time } = req.body;
    const movie = await prisma.movie.findFirst({ where: { title: movie_title } });
    const theater = await prisma.theater.findFirst({ where: { name: theater_name } });
    const screening = await prisma.screening.create({
      data: {
        movieId: movie.id,
        theaterId: theater.id,
        show_date: new Date(show_date),
        show_time,
        seats_total: 100,
        seats_available: 100
      }
    });
    res.status(200).json(screening);
  }
}