'use client';
import { useEffect, useState } from 'react';

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/book')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">내 예매 내역</h2>
      {bookings.length === 0 ? (
        <p>예매 내역이 없습니다.</p>
      ) : (
        <ul className="list-disc ml-6">
          {bookings.map(b => (
            <li key={b.id}>
              예매번호 {b.id} / 상영 ID {b.screeningId} / 좌석 수 {b.seat_count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}