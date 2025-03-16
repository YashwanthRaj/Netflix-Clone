import React from "react";
import "./Home.css";
import TitleCard from "../../components/TitleCard/TitleCard";
import NavBar from "../../components/NavBar/NavBar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="hero">
                <img src={hero_banner} alt="Banner Image" className="banner-img"/>
                <div className="hero-caption">
                    <img src={hero_title} alt="Title of Movie" className="caption-img" />
                    <p>Discovering ties to secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from in immortal enmy.</p>
                    <div className="hero-btns">
                        <button className="btn"><img src={play_icon} alt="" />Play</button>
                        <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
                    </div>
                    <TitleCard />
                </div>
            </div>
            <div className="more-cards">
                <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
                <TitleCard title={"Only on Netflix"} category={"popular"}/>
                <TitleCard title={"Upcoming"} category={"upcoming"}/>
                <TitleCard title={"Top picks for you"} category={"now_playing"}/>
            </div>

            <Footer />
        </div>
    )
}

export default Home