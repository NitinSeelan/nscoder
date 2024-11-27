'use client'

import Link from 'next/link';
import styles from "../globals.css";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/python">Modules</Link>
      </nav>

      <iframe 
        src="https://docs.google.com/document/d/1ry1CgfmR_e4M8yShdIn096YDrkmYh5dkzZqsbKKqvOo/edit?tab=t.0" 
        width="85%" 
        height="740px"
        title="Document"
      ></iframe>
      <br/>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSflxvvThUtMH4zUR1uOpDR3drJ1bTk9oG7JxaOLeCM5_YKF3Q/viewform?embedded=true" 
        width="640" 
        height="227" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0" 
        title="Form"
      ></iframe>
      <br/>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf64wpCvW9oyuihmGlkeJo6vPUDa7YOKkvEV0hFw59MJKBGSg/viewform">
        <button className="btn3">1.1 Quiz</button>
      </Link>
    </div>
  );
}
