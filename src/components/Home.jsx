import React from 'react';
import background_img from '../assets/images/home_background.jpg'

export const Home = () => {
    return (
        <section id="home">
            <img src={background_img} alt="home background img" className="home_background"></img>
            <div className="home-title">
                <h1>NATA</h1>
            </div>
        </section>
    )
}