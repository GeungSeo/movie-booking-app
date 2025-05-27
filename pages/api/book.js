export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { screening_id, seat_count } = req.body;
    await prisma.screening.update({
      where: { id: parseInt(screening_id) },
      data: { seats_available: { decrement: parseInt(seat_count) } }
    });
    const booking = await prisma.booking.create({
      data: {
        userId: 1, // 임시 사용자
        screeningId: parseInt(screening_id),
        seat_count: parseInt(seat_count)
      }
    });
    res.status(200).json(booking);
  } else if (req.method === 'GET') {
    const bookings = await prisma.booking.findMany();
    res.status(200).json(bookings);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    const deleted = await prisma.booking.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: '삭제 완료', deleted });
  }
}