'use client'
import Image from "next/image";
import styles from "../globals.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div >
        <nav>
      <Link href="/" passHref>
        <a aria-current={router.pathname === '/' ? 'page' : undefined}>Home</a>
      </Link>
      <Link href="/python" passHref>
        <a aria-current={router.pathname === '/python' ? 'page' : undefined}>Modules</a>
      </Link>
    </nav>
    <main>
<a href="/u1m1a1"><button className="btn2">1.1</button></a>
<button className="btn2">1.2</button>  
<button className="btn2">1.3</button>  
<button className="btn2">1.4</button> 
    </main>
    </div>
  );
}
