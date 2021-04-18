import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-4 top-0 bg-gray-300 w-full sticky'>
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
  );
};

export default Header;
