import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    fetch('/api/movies').then(res => res.json()).then(setMovies);
    fetch('/api/theaters').then(res => res.json()).then(setTheaters);
    fetch('/api/screenings').then(res => res.json()).then(setScreenings);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">관리자 대시보드</h1>

      <h2 className="mt-6 font-semibold">영화 목록</h2>
      <ul>{movies.map(m => <li key={m.id}>{m.title}</li>)}</ul>

      <h2 className="mt-6 font-semibold">극장 목록</h2>
      <ul>{theaters.map(t => <li key={t.id}>{t.name}</li>)}</ul>

      <h2 className="mt-6 font-semibold">상영 정보</h2>
      <ul>{screenings.map(s => <li key={s.id}>{s.movie_title} @ {s.theater_name} - {s.show_date} {s.show_time}</li>)}</ul>
    </div>
  );
}