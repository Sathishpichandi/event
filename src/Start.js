import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function Start() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
        requested_media: "",
        shoot_title: "",
        event_date: "",
        event_starting_time: "", 
        event_ending_time: "", 
        event_address: "",
        city: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/user/save', inputs)
            .then(function(response){
                console.log(response.data);
                navigate('/ThankYouPage');
            })
            .catch(function(error){
                console.error('Error saving user:', error);
            });
    };

    const containerStyle = {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    };

    const headingStyle = {
        fontFamily: 'Georgia, serif',
        color: 'blue',
    };

    const labelStyle = {
        fontFamily: 'Tahoma, sans-serif',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Event Photography Registration</h1>
            <h2>Fill The Details</h2>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                       
                        <tr>
                            <th>
                                <label style={labelStyle}>Name: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="text"
                                    name="name"
                                    label="Required"
                                    placeholder="Enter your name"
                                    value={inputs.name}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Email: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="text"
                                    name="email"
                                    label="Required"
                                    placeholder="Enter your email"
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Phone: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="text"
                                    name="phone"
                                    label="Required"
                                    placeholder="Enter your Phone_no"
                                    value={inputs.phone}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                       
                        <h2>Event details</h2>
                        <tr>
                            <th>
                                <label style={labelStyle}>Requested Media: </label>
                            </th>
                            <td>
                                <RadioGroup
                                    name="requested_media"
                                    value={inputs.requested_media}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel value="photography" control={<Radio />} label="Photography" />
                                    <FormControlLabel value="videography" control={<Radio />} label="Videography" />
                                </RadioGroup>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Shoot Title: </label>
                            </th>
                            <td>
                                <FormControl fullWidth>
                                    <InputLabel id="shoot-title-label">Shoot Title</InputLabel>
                                    <Select
                                        labelId="shoot-title-label"
                                        name="shoot_title"
                                        value={inputs.shoot_title}
                                        onChange={handleChange}
                                        displayEmpty
                                    >
                                        <MenuItem value="">
                                            
                                        </MenuItem>
                                        <MenuItem value="wedding">Wedding</MenuItem>
                                        <MenuItem value="birthday">Birthday</MenuItem>
                                        <MenuItem value="corporate">Corporate</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Event Date: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="date"
                                    name="event_date"
                                    label="Required"
                                    placeholder="Select a date"
                                    value={inputs.event_date}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Event Starting Time: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="time"
                                    name="event_starting_time"
                                    label="Required"
                                    placeholder="Select a starting time"
                                    value={inputs.event_starting_time}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Event Ending Time: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="time"
                                    name="event_ending_time"
                                    label="Required"
                                    placeholder="Select a ending time"
                                    value={inputs.event_ending_time}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>Event Address: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="text"
                                    name="event_address"
                                    label="Required"
                                    placeholder="Enter Event Address"
                                    value={inputs.event_address}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label style={labelStyle}>City: </label>
                            </th>
                            <td>
                                <TextField
                                    required
                                    type="text"
                                    name="city"
                                    label="Required"
                                    placeholder="Enter your city"
                                    value={inputs.city}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        
                        <tr>
                            <td colSpan="2" align="right">
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: 'blue', color: 'white', border: '1px solid #ccc', padding: '8px 16px' }}
                                    type="submit"
                                >
                                    CONFIRM
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
