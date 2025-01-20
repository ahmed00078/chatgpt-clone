import './homePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to ChatGPT Clone</h1>
            <div className="chat-container">
                <div className="messages">
                    {/* Messages will be displayed here */}
                </div>
                <div className="input-area">
                    <input type="text" placeholder="Type your message..." />
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;