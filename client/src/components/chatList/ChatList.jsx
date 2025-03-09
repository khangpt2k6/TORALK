import { Link } from 'react-router-dom'
import './chatList.css'

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard" className='subtitle'>Create a new Chat</Link>
            <Link to="/dashboard" className='subtitle'>Explore Toralk</Link>
            <Link to="/dashboard" className='subtitle'>Contact</Link>
            <span className="title">RECENT CHAT</span>
            <hr />
            <div className="list">
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
                <Link to="/" className='items'>My chat title</Link>
             </div>
            <hr />
            <div className="upgrade">
                <img src="/Bulllogo.png" alt="" />
                <div className="texts">
                    <span>Upgrade to Toralk Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList
