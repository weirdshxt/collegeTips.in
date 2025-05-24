import React from 'react'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#faede2] flex items-center justify-center">
        <Navbar />
        <h1 className="text-9xl font-bold text-[#0f172a]">collegeTips.in</h1>
      {/* <Loader /> */}

      <div className="image flex ">
        <div className="image-1">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home