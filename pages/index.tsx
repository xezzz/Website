import styles from '../styles/Home.module.css';
import { MetaTags } from '../components/MetaTags';
import { Space } from '../components/Space';
import { Logo } from '../components/Logo';
import { Anchor } from '../components/Anchor';
import { useRef } from 'react';



export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>

      <MetaTags />

      <main className={styles.container} ref={containerRef}>
        <article  className={styles.article}>
          <Logo />
          <Space y={30} />
          <h1>
            xezzz
          </h1>
          <Space y={30} />
          <p>
            ~ think deep, don't sink
          </p>
          <Space y={30} />
          <p>
            Discord:{" "}
            <Anchor url="https://discord.com/users/543056846601191508">@PauL#0001</Anchor>
            <br />
            Twitter: <Anchor url="https://twitter.com/xezzz">@xezzz_</Anchor>
            <br />
            GitHub: <Anchor url="https://github.com/xezzz">@xezzz</Anchor>
          </p>
        </article > 
      </main>

    </>
  )
}
