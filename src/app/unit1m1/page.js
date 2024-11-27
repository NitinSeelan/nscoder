'use client'
import Image from "next/image";
import styles from "../globals.css";

export default function Home() {
  return (
    <div >
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a href="/python">Modules</a>
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
