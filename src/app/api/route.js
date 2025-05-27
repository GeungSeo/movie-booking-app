export async function GET() {
  const bookings = [
    { id: 1, screeningId: 101, seat_count: 2 },
    { id: 2, screeningId: 102, seat_count: 3 },
    { id: 3, screeningId: 103, seat_count: 1 },
  ];

  return new Response(JSON.stringify(bookings), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
