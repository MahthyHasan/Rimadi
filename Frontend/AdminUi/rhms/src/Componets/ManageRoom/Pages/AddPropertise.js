import React from 'react'
import Layout from '../../../Layout/Layout';
import TopNavigationBar from '../Components/TopNavigationBar';

const tabs = [
	{ label: "Properties", link: "/manageR/properties" },
	{ label: "Rooms", link: "/manageR/Rooms" },
	{ label: "Maintenance", link: "/manageR/Maintenance" },
	{ label: "Smart Key", link: "/manageR/smartKey" },
];

function AddPropertise() {
  return (
    <Layout>
        <div className='container'>
            <div className='top-Navigation-bar'>
                <TopNavigationBar tabs={tabs} />
            </div>
            <div className='add-property-total-box'>
                <div className='row'>

                </div>
            </div>
        </div>

    </Layout>
  )
}

export default AddPropertise
