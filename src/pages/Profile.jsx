import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import ExploreBar from '../components/ExploreBar'
import ProfileInfo from '../components/ProfileInfo'
import profileData from "../data/profileData.json"
import TweetCard from '../components/TweetCard'
import tweetData from "../data/tweets.json"

const Profile = () => {
  const profile = profileData;

  const allTweets = tweetData.map((item)=>{
    return <TweetCard key={item.id} tweetData={item}/>;
  })
  return (
    <div>
      <Layout title="Home / Twitter">
            <div className='h-screen flex flex-row'>
            <Sidebar />

            <div className='flex-1 overflow-scroll'>
              <ProfileInfo profile={profile} />
              {allTweets}
            </div>
            <ExploreBar/>
            </div>
        </Layout>
    </div>
    
  )
}

export default Profile