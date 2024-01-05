    import React from 'react';
    import './Donate.css'; // Import your CSS file for styling
    import { IconButton} from '@mui/material';
    import EmailIcon from '@mui/icons-material/Email';
    import PhoneIcon from '@mui/icons-material/Phone';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import Youtube from '@mui/icons-material/YouTube';
    import WhatsApp from '@mui/icons-material/WhatsApp';

    const Donate = () => {
    return (
        <>
        <div className="donate-page">
            <div className="background-image">
                {/* You can replace the image source with your actual image file */}
                <img src="/Images/katt-yukawa-K0E6E0a0R3A-unsplash.jpg" alt="Background" />
            </div>
            <div className="content-container">
                <div className="overlay">
                    <div className="overlay-text">
                        <h2>Donate</h2>
                        <p>4 a Better World!</p>
                    </div>
                </div>
                <div className="card-container">
                    {/* Example cards, you can add more as needed */}
                    <div className="card">
                        <img src="/Images/sbi.png" alt="Card 1" />
                        <h4>Account Transfer</h4>
                        <p>Account No.</p>
                        
                    </div>
                    <div className="card">
                        <img src="/Images/VLSS QR Code.jpg" alt="Card 3" />
                        <h4>QR Code</h4>
                        <p>UPI Id1</p>
                        
                    </div>
                </div>
            </div>
        </div>
            <div className="overlay-text">
                <h2>Support a Worthy Cause</h2>
                <p>It's Not the money only that makes the difference!!</p>
            </div>
                <div className="additional-container">
                    {/* Example cards, you can add more as needed */}
                    <div className="additional-card">
                        
                        <img src="/icons/charity.png" alt="Card 1" />
                        <h1>Volunteer</h1>
                        <p>Empower Lives, Join Our Volunteer Force.</p>
                        
                    </div>
                    <div className="additional-card">
                        <img src="/icons/customer-engagement.png" alt="Card 3" />
                        <h1>Member</h1>
                        <p>Together We Can Achieve More – Become a Proud Member.</p>
                        
                    </div>
                    <div className="additional-card">
                        <img src="/icons/heart.png" alt="Card 3" />
                        <h1>Support</h1>
                        <p>Give Hope, Support Today for a Better Tomorrow.</p>
                        
                    </div>
                    <div className="additional-card">
                        <img src="/icons/follow-us.png" alt="Card 3" />
                        <p>
                        <IconButton color="inherit" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color="inherit" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <WhatsApp />
                        </IconButton>
                        <IconButton color="inherit" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <Youtube />
                        </IconButton>
                        <IconButton color="inherit" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <EmailIcon />
                        </IconButton>
                        </p>
                        <p><PhoneIcon/>+91 8954946969</p>
                    </div>
        </div>
        </>
    );
    };

    export default Donate;
