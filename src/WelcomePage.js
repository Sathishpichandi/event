import { useNavigate } from "react-router-dom";
import { Button, Typography, Container, Grid, Paper } from "@mui/material";

export default function WelcomePage() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }

    return (
        <div style={{ 
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s")', // Example background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container maxWidth="md">
                <Paper elevation={3} style={{
                    padding: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '10px',
                    textAlign: 'center'
                }}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to Event Photography Management
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Manage your event photography needs with ease. Our platform helps you schedule, organize, and keep track of all your events and media efficiently.
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={() => handleNavigate('/Start')}
                            >
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={() => handleNavigate('/AboutUs')}
                            >
                                About Us
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}
