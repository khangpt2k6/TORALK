import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

const Homepage = () => {

    const [typingStatus,setTypingStatus] = useState("human1")

    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className="orbital" />
            <div className="left">
                <h1>TORALK</h1>
                <h2>Welcome to Toralk – where ideas take flight! 🚀</h2>
                <h3>
                Unleash creativity, boost productivity, and fuel 
                success.
                </h3>
                <Link to="/dashboard"><b>Get Started</b></Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg">
                        </div>
                    </div>
                    <img src="/Bull.png" alt="" className="bot" />
                    <div className="chat">
                        <img 
                            src={
                                typingStatus === "human1" ? "/Bull.png" : typingStatus === "human2" ? "/Bull.png" : "Bull.png"
                                } 
                                alt="" 
                            />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Hey there! How can I assist you today?',
                                1500, ()=>{
                                    setTypingStatus("bot")
                                },
                                'I’m here to make work easier',
                                1500, ()=>{
                                    setTypingStatus("human2")
                                },
                                'Join 1000+ users who get answers from me every month!',
                                1500, ()=>{
                                    setTypingStatus("bot")
                                },
                                'Homework? Advice? Life hacks?',
                                1500, ()=>{
                                    setTypingStatus("human1")
                                },
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation
                        />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/Bulllogo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Service</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;