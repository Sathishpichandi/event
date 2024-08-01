import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Show() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/user/${id}`)
            .then(response => {
                console.log(response.data);
                setInputs(response.data);
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/api/user/${id}/edit`, inputs)
            .then(response => {
                console.log(response.data);
                navigate('/Show');
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    }

    return (
        <div style={{ 
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s")', 
            backgroundSize: 'cover', 
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '100px', borderRadius: '30px' }}>
                <h1>modify</h1>
                <form onSubmit={handleSubmit}>
                   
                    <TextField
                        label="Name"
                        value={inputs.name || ''}
                        name="name"
                        onChange={handleChange}
                    
                        margin="normal"
                    />
                    <tr>
                    <TextField
                        label="Email"
                        value={inputs.email || ''}
                        name="email"
                        onChange={handleChange}
                        
                        margin="normal"
                    />
                    </tr>
                    <tr>
                    <TextField
                        label="phone"
                        value={inputs.phone || ''}
                        name="phone"
                        onChange={handleChange}
                        margin="normal"
                    />
                    </tr>
                    <tr>
                  
                     <TextField
                        label="Requested_media"
                        value={inputs.requested_media || ''}
                        name="requested_media"
                        onChange={handleChange}
                        
                        margin="normal"
                    />
                    </tr>
                    <tr>
                    <TextField
                        label="Shoot_title"
                        value={inputs.shoot_title || ''}
                        name="shoot_title"
                        onChange={handleChange}
                        
                        margin="normal"
                    />
                    </tr>
                    <tr>
                     <TextField
                        label="Event_date"
                        value={inputs.event_date || ''}
                        name="event_date"
                        onChange={handleChange}
                        
                        margin="normal"
                    />
                    </tr>
                    <tr>
                     <TextField
                        label="Event_Starting_time"
                        value={inputs.event_starting_time || ''}
                        name="event_starting_time"
                        onChange={handleChange}
                        
                        margin="normal"
                    />
                    </tr>
                    <tr>
                       <TextField
                        label="Event_Ending_time"
                        value={inputs.event_ending_time || ''}
                        name="event_ending_time"
                        onChange={handleChange}
                        
                        margin="normal"
                    /></tr>
                    <tr>
                    <TextField
                        label="Event_address"
                        value={inputs.event_address || ''}
                        name="event_address"
                        onChange={handleChange}
                        
                        margin="normal"
                    /></tr>
                    <tr>
                    <TextField
                        label="City"
                        value={inputs.city || ''}
                        name="city"
                        onChange={handleChange}
                        
                        margin="normal"
                    /></tr>
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </form>
            </div>
        </div>
    );
}
