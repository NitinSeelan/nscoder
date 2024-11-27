'use client'
import Image from "next/image";
import styles from "../globals.css";
import Link from 'next/link';


export default function Home() {
  return (
    <div >
    <nav>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/python" passHref>
        <a>Modules</a>
      </Link>
    </nav>
<iframe src="https://docs.google.com/document/d/1ry1CgfmR_e4M8yShdIn096YDrkmYh5dkzZqsbKKqvOo/edit?tab=t.0" width="85%" height="740px"></iframe>
<br/>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSflxvvThUtMH4zUR1uOpDR3drJ1bTk9oG7JxaOLeCM5_YKF3Q/viewform?embedded=true" width="640" height="227" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
<br/>
<a href="/u1m1a1quiz"><button className="btn3">1.1 Quiz</button></a>

    </div>
  );
}
