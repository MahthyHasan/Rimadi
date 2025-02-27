import React from 'react';
import AddPropertyAdress from '../../../Elements/ManageRoom/AddProperty/AddPropertyAddress';
import AddPropertyName from '../../../Elements/ManageRoom/AddProperty/AddPropertyName';
import Layout from '../../../../Layout/Layout';

const AddPropertyDeatailsPage = () => {
  return (
    <Layout>
        <div className='p-6 bg:white border-2 border-rmdYellow rounded-2xl flex flex-row gap-4'>
            <AddPropertyName />
            <AddPropertyAdress />
        </div>

    </Layout>    
  )
}

export default AddPropertyDeatailsPage
