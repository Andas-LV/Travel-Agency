import styles from "./page.module.css";
import Route from "@/pages/api/route";

export default function Home() {
    { Route() }

    return (
    <main className={styles.main}>
        i am working
    </main>
  );
}
