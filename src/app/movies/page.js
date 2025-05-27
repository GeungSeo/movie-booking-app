'use client';
import { useEffect, useState } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">영화 목록</h2>
      <ul className="list-disc ml-6">
        {movies.map(movie => (
          <li key={movie.id}>{movie.title} ({movie.genre})</li>
        ))}
      </ul>
    </div>
  );
}