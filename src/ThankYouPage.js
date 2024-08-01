import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '20px'
    };

    const headingStyle = {
        fontSize: '10rem',
        marginBottom: '20px'
    };

    const messageStyle = {
        fontSize: '2rem',
        marginBottom: '20px'
    };

    const linkStyle = {
        fontSize: '2rem',
        color: '#007bff',
        textDecoration: 'none'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Thank You!</h1>
            <p style={messageStyle}>We appreciate your submission. Our team will get back to you soon.</p>
             <Link to="/Start" style={linkStyle}>Registration</Link>
             <Link to="/Show" style={linkStyle}>Show Details</Link>
            
            </div>
    );
}

export default ThankYouPage;
