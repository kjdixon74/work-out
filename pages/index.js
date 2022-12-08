import Head from "next/head";
import styles from "../styles/Home.module.css";

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
          We're here to help you manage your strength training workouts, so you
          can achieve your fitness goals.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Exercises &rarr;</h2>
            <p>
              Add your favorite upper body, core, and lower body exercises and
              any equipment
              <br />
              <br />
              Don't forget the squats!
            </p>
          </div>

          <div className={styles.card}>
            <h2>Workouts &rarr;</h2>
            <p>
              Build a workout based on your exercises! Decide what sets and reps
              per workout.
              <br />
              <br />
              For your leg day, you can add 12 sets of squats for 3 reps!
            </p>
          </div>

          <div className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Created by Katherine Dixon</footer>
    </div>
  );
}
