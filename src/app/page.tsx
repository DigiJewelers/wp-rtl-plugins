import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Hi Dad!</h2>
        <div>{process.env.NEXT_PUBLIC_APP_VERSION}</div>
      </main>
    </div>
  );
}
