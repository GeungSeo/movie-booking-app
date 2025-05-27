import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function User() {
  const [screenings, setScreenings] = useState([]);
  const [booking, setBooking] = useState({ screening_id: '', seat_count: 1 });
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/screenings').then(res => setScreenings(res.data));
  }, []);

  const submitBooking = () => {
    axios.post('/api/book', booking)
      .then(() => setMessage('예매가 완료되었습니다.'))
      .catch(() => setMessage('오류가 발생했습니다.'));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">영화 예매</h1>
      <select
        className="border px-2 py-1"
        onChange={e => setBooking({ ...booking, screening_id: e.target.value })}>
        <option>상영 선택</option>
        {screenings.map(s => (
          <option key={s.id} value={s.id}>
            {s.movie_title} @ {s.theater_name} ({s.show_time})
          </option>
        ))}
      </select>
      <input
        type="number"
        className="border ml-2 w-20 px-1"
        min="1"
        max="10"
        value={booking.seat_count}
        onChange={e => setBooking({ ...booking, seat_count: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded"
        onClick={submitBooking}>
        예매
      </button>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}