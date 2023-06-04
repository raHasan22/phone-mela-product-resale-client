import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from './Catagories/Catagories';
import Offers from './ourOffers/Offers';
import Sell from './Sell/Sell';
import Benefits from '../Benefits/Benefits';
import Stats from './Stats/Stats';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Offers></Offers>
            <Catagories></Catagories>
            <Benefits></Benefits>
            <Sell></Sell>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;