import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from "../components/header";

const Home: NextPage = () => {
  return (
      <>
        <div className={styles.header}>
          <Header isLoggedIn={true} />
        </div>
      </>
  )
}

export default Home
