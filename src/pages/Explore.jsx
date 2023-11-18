import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar"
import tweetData from "../data/tweets.json"
import WhoToFollowCard from "../components/WhoToFollowCard"
import TabSection from "../components/TabSection";
import trendingData from "../data/trendingData.json"
import TrendingCard from "../components/TrendingCard";

const Explore = () => {
    const whoToFollow = tweetData.map((item)=>{
        return <WhoToFollowCard key={item.id} userData={item} />
    })
     const trends = trendingData.map((item)=>{
       return <TrendingCard key={item.id} data={item}/>
     })

  //   // filter method
  //   const trends = trendingData.filter((item)=>item.category==="Finance").map((item)=>{
  //     return <TrendingCard key={item.key} data={item} />
  // })

  // // slice method
  // const trends = trendingData.slice(1,3).map((item)=>{
  //      return <TrendingCard key={item.id} data={item}/>
  //    })
    return <Layout title="Explore / Twitter">
        <div className="h-screen flex flex-row">
            {/* sidebar  */}
            <Sidebar />
            {/* central tranding section  */}
            <div className="flex-1 flex flex-col bg-white w-2/3 px-2 overflow-scroll">
              {/* search bar */}
              <div className="flex flex-row bg-slate-100 rounded-full mt-2 p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full px-2 focus:ring-0 outline-none"
        />
      </div>
      {/* tab section */}
      <TabSection/>

      {/* banner img */}
      <div className="border-b-2">
        <img 
        src="https://res.cloudinary.com/sarveshp46/image/upload/v1671538375/twitter-workshop/banner_image_xe0jnw.jpg"
        alt="banner"
        className="w-full"
        />
      </div>

      {/* trending topics */}
      <div>
        {trends}
      </div>

            </div>

            {/* right whotofollow card */}
            <div className="flex flex-col bg-white w-1/3 px-3 overflow-scroll">
            <div className="flex flex-col bg-slate-100 rounded-2xl my-3 h-fit">
        <p className="font-black p-3 text-lg">Who To Follow</p>
        {whoToFollow}
        <p className="font-normal text-blue-600 hover:font-semibold cursor-pointer text-lg p-3">
          Show More
        </p>
      </div>
            </div>
        </div>
    </Layout>;
};

export default Explore;
