'use client'
import Image from "next/image";
import styles from "../globals.css";
import Link from 'next/link';

export default function Home() {
  return (
<div>
<nav>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/python" passHref>
        <a aria-current="page">Modules</a>
      </Link>
    </nav>
    <main>
      <h1>Unit 1</h1>
<a href="/unit1m1"><button className="btn2">Module 1</button></a> 
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