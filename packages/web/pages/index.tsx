import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { pickRandomAroma } from '../utils/aroma';


const Home: NextPage = () => {
  const router = useRouter()

  const selectRandomAroma = () => {
    const { id } = pickRandomAroma();
    router.push(`/${id}`);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          WineFinder
        </h1>

        <p className={styles.description}>
          I like wine with notes of...
        </p>

        <InputGroup className="mb-3" size="lg">
          <FormControl />
          <Button variant="outline-info">
            Search
          </Button>
        </InputGroup>

        <Button variant="outline-info" size="lg" onClick={selectRandomAroma}>
          I&apos;m feeling lucky
        </Button>
      </main>
    </div>
  )
}

export default Home
