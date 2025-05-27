import { useEffect, useState } from 'react';

export default function MyBookings() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/book').then(res => res.json()).then(setData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">예매 내역</h1>
      <table className="border mt-4">
        <thead><tr><th>ID</th><th>상영정보ID</th><th>좌석 수</th></tr></thead>
        <tbody>
          {data.map(b => (
            <tr key={b.id}><td>{b.id}</td><td>{b.screeningId}</td><td>{b.seat_count}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}