import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='p-4 fixed  top-0 bg-gray-300 w-full'>
        <navbar>
          <Link href='/'>
            <a className=' mx-2 hover:text-gray-500'>Home</a>
          </Link>
          <Link href='/users'>
            <a className=' mx-2 hover:text-gray-500'> Users</a>
          </Link>
          <Link href='/about'>
            <a className=' mx-2 hover:text-gray-500'>About</a>
          </Link>
        </navbar>
      </header>
      <div className=' min-h-screen flex flex-col justify-center items-center px-2'>
        {children}
      </div>
    </>
  );
};

export default Layout;
