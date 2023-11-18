import React from 'react'
import ExploreBar from '../components/ExploreBar'
import HomeFeed from '../components/HomeFeed'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
        <Layout title="Home / Twitter">
            <div className='h-screen flex flex-row'>
            <Sidebar />

            <div className='flex-1'>
              <HomeFeed/>
            </div>
            <ExploreBar/>
            </div>
        </Layout>
    </div>
  )
}

export default Home