import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    const containerStyle = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        padding: '20px'
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0'
    };

    const thStyle = {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '2px solid #ddd'
    };

    const tdStyle = {
        padding: '10px',
        borderBottom: '1px solid black'
    };

    return (
        <div style={containerStyle}>
            <h1>Show Details</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>No</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Phone</th>
                        <th style={thStyle}>Requested Media</th>
                        <th style={thStyle}>Shoot Title</th>
                        <th style={thStyle}>Event Date</th>
                        <th style={thStyle}>Event Starting Time</th>
                        <th style={thStyle}>Event Ending Time</th>
                        <th style={thStyle}>Event Address</th>
                        <th style={thStyle}>City</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td style={tdStyle}>{user.id}</td>  
                            <td style={tdStyle}>{user.name}</td>
                            <td style={tdStyle}>{user.email}</td>
                            <td style={tdStyle}>{user.phone}</td>
                            <td style={tdStyle}>{user.requested_media}</td>
                            <td style={tdStyle}>{user.shoot_title}</td>
                            <td style={tdStyle}>{user.event_date}</td>
                            <td style={tdStyle}>{user.event_starting_time}</td>
                            <td style={tdStyle}>{user.event_ending_time}</td>
                            <td style={tdStyle}>{user.event_address}</td>
                            <td style={tdStyle}>{user.city}</td>
                            <td style={tdStyle}>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "20px", textDecoration: 'none', color: '#007bff'}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)} style={{border: 'none', backgroundColor: '#dc3545', color: 'white', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
