'use client';

import { useEffect, useState } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=ko-KR&page=1`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error('영화 데이터를 불러오는 데 실패했습니다.', err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">인기 영화 목록</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
