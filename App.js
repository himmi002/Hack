import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaRobot, FaSolarPanel, FaRecycle, FaTint, FaLeaf } from 'react-icons/fa';  // Icons for Quick Actions
import './App.css';  // Make sure to import your CSS here

// QuickActions Component
const QuickActions = ({ onQuickActionClick }) => {
  const actions = [
    { id: 1, title: 'Renewable Energy', description: 'Learn about solar, wind, and other renewable energy sources.', icon: <FaSolarPanel /> },
    { id: 2, title: 'Reduce Plastic', description: 'Discover ways to reduce plastic use in your daily life.', icon: <FaRecycle /> },
    { id: 3, title: 'Carbon Emission in Supply Chain', description: 'Understand the impact of supply chain on carbon emissions.', icon: <FaLeaf /> }, // Updated action
    { id: 4, title: 'Water Conservation', description: 'Explore tips on conserving water and its importance.', icon: <FaTint /> },
  ];

  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <div 
          key={action.id} 
          className="quick-action-box" 
          onClick={() => onQuickActionClick(action.title)}>
          <div className="quick-action-icon">
            {action.icon}
          </div>
          <h3>{action.title}</h3>
          <p>{action.description}</p>
        </div>
      ))}
    </div>
  );
};

function App() {
  const handleQuickActionClick = (actionTitle) => {
    console.log(`Quick Action Clicked: ${actionTitle}`);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <a href="#" className="logo"><img src="\SWASTAYANLogo.png" alt="Logo"></img></a>
          <ul className="nav-links">
            <li><Link to="/" className="link1">Home</Link></li>
            <li><Link to="/dashboard" className="link2">Dashboard</Link></li>
            <li><Link to="/login" className="link3">Login</Link></li>
          </ul>
        </nav>

        <div className="main-content">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Chat History</h2>
            <button className="chat">Chat 1</button>
            <button className="chat">Chat 2</button>
            <button className="chat">Chat 3</button>
            <button className="new-chat-btn">+ New Chat</button>
          </div>

          {/* Chat Area */}
          <div className="chat-container">
            <div className="chat-header">
              <FaRobot /> Sustainability Chatbot
            </div>

            {/* Chat Body with Quick Actions */}
            <div className="chat-body">
              <p>Welcome to Swastayan Chatbot! How can I assist you in reducing carbon emissions today?</p>

              {/* Quick Actions Component */}
              <QuickActions onQuickActionClick={handleQuickActionClick} />
            </div>

            {/* Chat Input */}
            <div className="chat-input">
              <input type="text" placeholder="Type your message here..." />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>

      {/* Routes for Navbar Links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

const Home = () => <h2>Welcome to Swastayan</h2>;
const Dashboard = () => <h2>Dashboard: Track your sustainability efforts here!</h2>;
const Login = () => <h2>Login: Please sign in to access your reports</h2>;

export default App;
