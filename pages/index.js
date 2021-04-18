import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className=' text-6xl'>Home</h1>
      <div className='h-48 bg-red-400 my-2 w-full'>block</div>
      <div className='h-48 bg-red-400 my-2 w-full'>block</div>
      <div className='h-48 bg-red-400 my-2 w-full'>block</div>
      <div className='h-48 bg-red-400 my-2 w-full'>block</div>
    </Layout>
  );
}
