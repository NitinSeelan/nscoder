'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './globals.css';

export default function Home() {
  // State to track whether we're on the client side
  const [isClient, setIsClient] = useState(false);

  // Set the flag to true once the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If we're not on the client yet, return null (or a loading spinner)
  if (!isClient) {
    return null; // You can also render a loading spinner here
  }

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/python">Modules</Link>
      </nav>

      <h1>Welcome!</h1>

      <main>
        {/* Render iframe only on the client side */}
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vSoj7uoY1z1BS25K2fc2J_qNgLJCaDwE-wiYuQZHSoK129RJYzqnGNQmL_bkpTDePWV2IYTw_ihvf4Y/embed?start=false&loop=false&delayms=3000" 
          frameBorder="0" 
          width="960" 
          height="569" 
          allowFullScreen={true} 
          mozallowfullscreen="true" 
          webkitallowfullscreen="true">
        </iframe>
      </main>
    </div>
  );
}
