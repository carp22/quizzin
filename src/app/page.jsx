import Image from 'next/image'
import Link from 'next/link'

import blueBlob from "/public/blueBlob.png"
import yellowBlob from "/public/yellowBlob.png"

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Image src={yellowBlob} className={styles.yellowBlob} alt='blob-image' priority />

        <div className={styles.container}>

          <h2>Quizzin'</h2>
          <p>Want to play a game? Let's do it</p>
          <Link href="/quizz">
            <h3>Start Quizz</h3>
          </Link>

        </div>

        <Image src={blueBlob} className={styles.blueBlob} alt='blob-image' priority />
      </main>
    </>
  )
}
