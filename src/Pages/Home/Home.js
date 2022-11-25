import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from './Catagories/Catagories';
import Offers from './ourOffers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;