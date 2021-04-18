import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=' min-h-screen flex flex-col'>
        <Header />
        <div className='flex-1 flex flex-col justify-center items-center'>
          {children}
        </div>
        <footer className='py-4 w-full min-h-[100px] bg-gray-500 '></footer>
      </div>
    </>
  );
};

export default Layout;
