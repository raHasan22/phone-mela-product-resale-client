import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from './Catagories/Catagories';
import Offers from './ourOffers/Offers';
import Sell from './Sell/Sell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Catagories></Catagories>
            <Sell></Sell>
        </div>
    );
};

export default Home;