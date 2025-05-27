'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&page=1`);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error('영화 데이터를 가져오는 데 실패했습니다.', err);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">영화 예매 시스템</h1>
      <p>원하시는 작업을 선택해주세요</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <Link href="/movies" className="text-blue-600 hover:underline">영화 목록</Link>
        </li>
        <li>
          <Link href="/admin" className="text-blue-600 hover:underline">영화/극장/상영정보 등록</Link>
        </li>
        <li>
          <Link href="/my-bookings" className="text-blue-600 hover:underline">예매 내역</Link>
        </li>
      </ul>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">인기 영화 목록</h2>
        <ul className="list-disc ml-6 space-y-1">
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

