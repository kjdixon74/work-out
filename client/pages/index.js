import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>💪 Workout Wellness</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Workout Wellness!</h1>

        <p className={styles.description}>
          Log your workouts, track your progress, and achieve your fitness
          goals.
        </p>

        <div className={styles.grid}>
          <Link href="/demo" className={styles.card}>
            <h2>Curious how it works? &rarr;</h2>
            <p>See for yourself before signing up.</p>
          </Link>

          <Link href="/createAccount" className={styles.card}>
            <h2>Ready to get started? &rarr;</h2>
            <p>
              You just need your name, email, and a password to create an
              account.
            </p>
          </Link>

          <Link href="login" className={styles.card}>
            <h2>Already have an account? &rarr;</h2>
            <p>Login to pick up where you left off.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>Created by Katherine Dixon</footer>
    </div>
  );
}
