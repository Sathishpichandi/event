import { Container, Typography, Paper, Grid, Avatar } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import sathish from './sathish.jpg';
import dhivya from './dhivya.jpg';
import sarathi from './sarathi.jpg';

export default function AboutUs() {
    const theme = useTheme();

    return (
        <Container 
           
            style={{ 
            
                backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerXSLyIQQLdskn41dy8ysxGgq7DmEXTt9Aw&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: 'black',

            }}
        >
            <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                align="center" 
                style={{ color: 'black' }}
            >
                About Us
            </Typography>
            <Paper 
                elevation={3} 
                style={{ 
                    padding: theme.spacing(4), 
                    marginBottom: theme.spacing(4),
                    backgroundColor: 'rgba(255, 255, 255, 0.8)' 
                }}
            >
                <Typography variant="h5" paragraph>
                    Welcome to our Event Photography Management application! We are dedicated to helping you capture and manage your special events with ease.
                </Typography>
                <Typography variant="body1" paragraph>
                    Our team consists of passionate professionals with years of experience in event photography and management. We strive to provide a seamless experience from planning to execution, ensuring that every moment is perfectly captured.
                </Typography>
                <Typography variant="h6" paragraph>
                    Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                    Our mission is to simplify the event management process, making it easier for you to focus on what truly matters—creating memorable experiences. We believe in using technology to streamline tasks, improve organization, and enhance your overall experience.
                </Typography>
                <Typography variant="h6" paragraph>
                    Meet the Team
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={2} style={{ padding: theme.spacing(2), textAlign: 'center' }}>
                            <Avatar src={sathish} alt="Sathish" style={{ width: 120, height: 120, margin: '0 auto' }} />
                            <Typography variant="h6" style={{ marginTop: theme.spacing(2) }}>
                                SATHISH
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Founder & CEO
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Sathish is the visionary behind our application. With a background in photography and event management, he leads our team with passion and expertise.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={2} style={{ padding: theme.spacing(2), textAlign: 'center' }}>
                            <Avatar src={dhivya} alt="Dhivya" style={{ width: 120, height: 120, margin: '0 auto' }} />
                            <Typography variant="h6" style={{ marginTop: theme.spacing(2) }}>
                                DHIVYA
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Lead Photographer
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Dhivya is our lead photographer with an eye for capturing the perfect moments. Her work ensures that every event is remembered beautifully.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={2} style={{ padding: theme.spacing(2), textAlign: 'center' }}>
                            <Avatar src={sarathi} alt="Sarathi" style={{ width: 120, height: 120, margin: '0 auto' }} />
                            <Typography variant="h6" style={{ marginTop: theme.spacing(2) }}>
                                SARATHI
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Event Coordinator
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Sarathi is the glue that holds our operations together. Her organizational skills ensure that everything runs smoothly from start to finish.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
