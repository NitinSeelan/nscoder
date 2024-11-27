'use client'

import Link from 'next/link';
import styles from "../globals.css";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/" aria-current="page">Home</Link>
        <Link href="/python" aria-current="page">Modules</Link>
      </nav>

      <main>
        <h1>Unit 1</h1>
        <Link href="/unit1m1">
          <button className="btn2">Module 1</button>
        </Link>
        <button className="btn2">Module 2</button>
        <button className="btn2">Module 3</button>
        <button className="btn2">Module 4</button>

        <h1>Unit 2</h1>
        <button className="btn2">Module 1</button>
        <button className="btn2">Module 2</button>
        <button className="btn2">Module 3</button>
        <button className="btn2">Module 4</button>

        <h1>Unit 3</h1>
        <button className="btn2">Module 1</button>
        <button className="btn2">Module 2</button>
        <button className="btn2">Module 3</button>
        <button className="btn2">Module 4</button>
      </main>
    </div>
  );
}
