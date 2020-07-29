import React from 'react';
import web from "../src/img/hero-img.svg";

import Common from './Common';
const Home = () => {
    return (
        <div>
            <Common 
                name="Welcome To Home Page" 
                imgsrc= {web} 
                visit="/service"
                btname="Get Start"
            />
        </div>
    );
};
export default Home;