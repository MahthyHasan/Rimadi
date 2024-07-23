import React from 'react';
import ReactDOM from 'react-dom';
import "./dashPage.css";
import Layout from '../../../Layout/Layout';
import TopNavigationBar from '../Components/TopNavigationBar';



const tabs = [
  { label: 'Overview', link: '/dashboard-overview' },
  { label: 'Expenses', link: '/dashboard-expenses' },
  { label: 'Bill', link: '/dashboard-bill' },
  { label: 'Smart Key', link: '/dashboard-smartKey' },
];

function Overview() {
  return (
    <>
    <Layout>
      <div className='container'>
        <div className='top-Navigation-bar'>
          <TopNavigationBar tabs={tabs}/>
        </div>
      </div>        
    </Layout>
    </>
  )
}

export default Overview
