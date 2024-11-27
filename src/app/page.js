'use client'
import Image from "next/image";
import styles from "./globals.css";

export default function Home() {
  return (
    <div >
    <nav>
      <a href="/">Home</a>
      <a href="./python">Modules</a>
    </nav>
    <h1>Welcome!</h1>

    <main>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSoj7uoY1z1BS25K2fc2J_qNgLJCaDwE-wiYuQZHSoK129RJYzqnGNQmL_bkpTDePWV2IYTw_ihvf4Y/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </main>
    </div>
  );
}
