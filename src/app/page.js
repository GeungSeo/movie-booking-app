'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">영화 예매 시스템</h1>
      <p>아래 페이지들로 이동할 수 있습니다:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <Link href="/movies" className="text-blue-600 hover:underline">영화 목록</Link>
        </li>
        <li>
          <Link href="/admin" className="text-blue-600 hover:underline">관리자 등록</Link>
        </li>
        <li>
          <Link href="/my-bookings" className="text-blue-600 hover:underline">내 예매 내역</Link>
        </li>
      </ul>
    </main>
  );
}

