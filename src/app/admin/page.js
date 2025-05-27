'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [movie, setMovie] = useState({ title: '', genre: '' });
  const [theater, setTheater] = useState({ name: '', location: '' });
  const [screening, setScreening] = useState({ movie_title: '', theater_name: '', show_date: '', show_time: '' });

  const handleSubmit = async (e, endpoint, data) => {
    e.preventDefault();
    await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    alert(`${endpoint} 등록 완료`);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">관리자 등록</h2>

      <form onSubmit={(e) => handleSubmit(e, 'movies', movie)} className="space-y-2">
        <h3 className="font-semibold">영화 등록</h3>
        <input className="border p-1" placeholder="제목" onChange={e => setMovie({ ...movie, title: e.target.value })} />
        <input className="border p-1" placeholder="장르" onChange={e => setMovie({ ...movie, genre: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">등록</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'theaters', theater)} className="space-y-2">
        <h3 className="font-semibold">극장 등록</h3>
        <input className="border p-1" placeholder="이름" onChange={e => setTheater({ ...theater, name: e.target.value })} />
        <input className="border p-1" placeholder="위치" onChange={e => setTheater({ ...theater, location: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">등록</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'screenings', screening)} className="space-y-2">
        <h3 className="font-semibold">상영정보 등록</h3>
        <input className="border p-1" placeholder="영화 제목" onChange={e => setScreening({ ...screening, movie_title: e.target.value })} />
        <input className="border p-1" placeholder="극장 이름" onChange={e => setScreening({ ...screening, theater_name: e.target.value })} />
        <input className="border p-1" type="date" onChange={e => setScreening({ ...screening, show_date: e.target.value })} />
        <input className="border p-1" type="time" onChange={e => setScreening({ ...screening, show_time: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">등록</button>
      </form>
    </div>
  );
}