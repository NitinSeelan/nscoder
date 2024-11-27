'use client';
import Link from 'next/link';

export default function Home() {  
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/python">
          Modules
        </Link>
      </nav>

      {/* Main content with buttons */}
      <main>
        <Link href="/u1m1a1">
          <button className="btn2">1.1</button>
        </Link>
        <button className="btn2">1.2</button>
        <button className="btn2">1.3</button>
        <button className="btn2">1.4</button>
      </main>
    </div>
  );
}
