import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import {
    Container,
    Paper,
    Typography,
    Card,
    CardContent,
    TextField,
    Button,
    Grid,
    Icon,
    IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Youtube from '@mui/icons-material/YouTube';
import WhatsApp from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ShareIcon from '@mui/icons-material/Share';

const ContactUs = () => {
    return (
        <div className="contact-us-page">
          {/* Banner Section */}
          <div className="banner">
          <img src="/49107649401_2221cc3a55_o.png" alt="Contact Us" />
          </div>
            {/* Contact Information */}
            <Container>
                <Paper elevation={3} className="contact-info-container">
                    <Typography variant="h4" className="section-title">
                        Contact Information
                    </Typography>
                    <Grid container spacing={3}>
                        {/* Address */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent >
                                    <Typography variant="h6">
                                    
                                    <HomeIcon sx={{marginRight: 2 }} />
                                    
                                      Address  
                                    </Typography>
                                    <br />
                                    <Typography>
                                        गौ घाटी, जोधपुर (उत्तर) 
                                        <br />
                                        Gau Ghati, Jodhpur (North), 
                                        <br />
                                        Rajasthan, 342304
                                        <br />
                                        +91 8787878787
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6"><EmailIcon sx={{marginRight: 2 }}/>Email</Typography>
                                    <br />
                                    <Typography> <Icon sx={{marginRight: 2 }}><AlternateEmailIcon /></Icon>vlss@ngo.com</Typography>
                                    
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Social Media Handles */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6"><ShareIcon sx={{marginRight: 2 }}/>Social Media</Typography>
                                    <IconButton  href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton  href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton  href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <WhatsApp />
                                    </IconButton>
                                    <IconButton  href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <Youtube />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Map */}
                        <Grid item xs={12} sm={6} md={12}>
                            <Card>
                            <CardContent>
            <Typography variant="h6">Map</Typography>
            {/* Container with border-radius for the map iframe */}
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <iframe
                    width="100%"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=777&amp;height=350&amp;hl=en&amp;q=Gau%20Ghati%20Jodhpur+(Vishwas%20Lok%20Sewa%20Sansthan)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Google Map"
                ></iframe>
            </div>
        </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

            {/* Contact Form */}
            <Container>
                <Paper elevation={3} className="contact-form-container">
                    <Typography variant="h4" className="section-title">
                        Get in Touch
                    </Typography>
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit">
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default ContactUs;
