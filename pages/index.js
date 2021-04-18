import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='p-4 fixed top-0 bg-gray-300 w-full'>
        <navbar>
          <Link href='/' className='m-4'>
            Home
          </Link>
          <Link href='/users' className='mx-4'>
            Users
          </Link>
          <Link href='/about' className='mx-4'>
            About
          </Link>
        </navbar>
      </header>
      <div>
        <h1 className=' text-6xl'>Home</h1>
      </div>
    </div>
  );
}
