
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Model from './Components/Home/Model';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
const info=async()=>{
  const res=await fetch('/models.json');
  return res.json();
}
const data=info();
function App() {
  return (
  <>
<Navbar></Navbar>
<Banner></Banner>
<Suspense fallback={<div className='flex justify-center items-center min-h-screen '><span className="loading loading-spinner text-error"></span></div>}>
  <Model data={data}></Model>
</Suspense>
<Footer></Footer>
  </>

  )
}

export default App
