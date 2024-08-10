import React from 'react';
import ReactDOM from "react-dom";
import TopNavigationBar from '../Components/TopNavigationBar';
import Layout from '../../../Layout/Layout';
import "../../DashBoard/Pages/dashPage.css";
import TopCardsSection from '../Components/TopCardsSection';

const tabs = [
	{ label: "Properties", link: "/manageR/properties" },
	{ label: "Rooms", link: "/manageR/Rooms" },
	{ label: "Maintenance", link: "/manageR/Maintenance" },
	{ label: "Smart Key", link: "/manageR/smartKey" },
];

function Properties() {
  return (
    <Layout >
        <div className='container'>
            <div className='top-Navigation-bar'>
                <TopNavigationBar tabs={tabs} />
            </div>
            <div className="top-info-cards">
					<TopCardsSection />
			</div>
            <div className='row mt-2 properties-space-for-cards'>
                
            </div>
        </div>

    </Layout>
  )
}

export default Properties
