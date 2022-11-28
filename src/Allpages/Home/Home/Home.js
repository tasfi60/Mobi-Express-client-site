import React from 'react';
import Modals from '../../Categorydetails/Modal/Modals';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MidSection from '../MidSection/MidSection';
import Stores from '../Stores/Stores';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <Category></Category>
            <Advertisement></Advertisement>
            <MidSection></MidSection>
            <Stores></Stores>
        </div>
    );
};

export default Home;