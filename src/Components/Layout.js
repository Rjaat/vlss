    // src/components/Layout.js
    import React, { useState } from 'react';
    import './Layout.css';
    import useScrollTrigger from '@mui/material/useScrollTrigger';
    import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Paper,
    Button,
    IconButton,
    Link,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Box,
    } from '@mui/material';
    import MenuIcon from '@mui/icons-material/Menu';
    import EmailIcon from '@mui/icons-material/Email';
    import PhoneIcon from '@mui/icons-material/Phone';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import Youtube from '@mui/icons-material/YouTube';
    import WhatsApp from '@mui/icons-material/WhatsApp';
    import GitHubIcon from '@mui/icons-material/GitHub';

    import Menu from '@mui/material/Menu';
    import MenuItem from '@mui/material/MenuItem';
    import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
    import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
    

    const Layout = ({ children }) => {
        const [isDrawerOpen, setDrawerOpen] = useState(false);

        const trigger = useScrollTrigger();


        const handleDrawerOpen = () => {
            setDrawerOpen(true);
        };

        const handleDrawerClose = () => {
            setDrawerOpen(false);
        };

        const theme = useTheme();
        const isWideScreen = useMediaQuery(theme.breakpoints.up('md'));

        // State and functions for About Us dropdown
        const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);

        const handleAboutMenuOpen = (event) => {
            setAboutMenuAnchorEl(event.currentTarget);
        };

        const handleAboutMenuClose = () => {
            setAboutMenuAnchorEl(null);
        };

        // State and functions for Projects dropdown
        const [projectsMenuAnchorEl, setProjectsMenuAnchorEl] = useState(null);

        const handleProjectsMenuOpen = (event) => {
            setProjectsMenuAnchorEl(event.currentTarget);
        };

        const handleProjectsMenuClose = () => {
            setProjectsMenuAnchorEl(null);
        };

        // State and functions for Media dropdown
        const [mediaMenuAnchorEl, setMediaMenuAnchorEl] = useState(null);

        const handleMediaMenuOpen = (event) => {
            setMediaMenuAnchorEl(event.currentTarget);
        };

        const handleMediaMenuClose = () => {
            setMediaMenuAnchorEl(null);
        };

        // State and functions for Get-Involved
        const [getInvolvedMenuAnchorEl, setgetInvolvedMenuAnchorEl] = useState(null);
        const handleGetInvolvedMenuOpen = (event) => {
            setgetInvolvedMenuAnchorEl(event.currentTarget);
        }
        const handleGetInvolvedMenuClose = () => {
            setgetInvolvedMenuAnchorEl(null);
        }

        //state and functions for Download
        const  [downloadMenuAnchorEl, setDownloadMenuAnchorEl] = useState(null);
        const handleDownloadMenuOpen = (event) => {
            setDownloadMenuAnchorEl(event.currentTarget);
        }
        const handleDownloadMenuClose = () => {
            setDownloadMenuAnchorEl(null);
        }


        const topBarWide = (
            <AppBar position="sticky" color="transparent" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Always render the default logo in widescreen mode */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Logo" style={{ height: '70px', marginRight: '10px' }} />
                        {/* Conditionally render the logo based on the scrolling state */}
                        {trigger ? (
                            <img src="/logo.png" alt="Logo" style={{ height: '70px', marginRight: '10px' }} />
                        ) : null}
        
                        <div>
                            <Typography variant="h4" sx={{ fontFamily: 'cursive', fontWeight: 'bold', color: '#db531d' }}>
                                Vishwas Lok Sewa Sansthan
                            </Typography>
                            {/* Add the tagline below the NGO name */}
                            <Typography variant="body2" sx={{ fontFamily: 'cursive', textAlign:'center' , fontWeight: 'bold'}}>
                                Fueling Dreams, Fostering Hope
                            </Typography>
                        </div>
                    </div>
        
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ marginRight: 2 }}>
                            <EmailIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                            vlss.ngo@gmail.com
                        </Typography>
                        <Typography variant="body2">
                            <PhoneIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                            +91 9460044823 
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        );
        

        const topBarSmall = (
            <AppBar position="static" color="" elevation={0}>
            <Toolbar>
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                <EmailIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                vlss.ngo@gmail.com
                </Typography>
                <div>
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
                    < WhatsApp/>
                </IconButton>
                <IconButton color="inherit" href="https://www.youtube.com/@vlssngo" target="_blank" rel="noopener noreferrer">
                    < Youtube/>
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>
        );

        const logoAppBarSmall = (
            <AppBar position="sticky" elevation={0}>
                <Toolbar>
                    <img src="/logo.png" alt="Logo" style={{ height: '80px', marginRight: '10px', padding: '4px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, }}>
                        <Typography variant="h6" sx={{fontFamily: 'cursive', fontWeight:'bold'}}>
                            VLSS NGO
                        </Typography>
                        <Typography variant="subtitle2" sx={{fontFamily: 'cursive', color:'#000000'}}>
                            Fueling Dreams, Fostering Hope
                        </Typography>
                    </div>
                    <IconButton color="inherit" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
        


        const appBarItems = (
            <Toolbar sx={{justifyContent: 'center' }}>
                <Button 
                color="inherit" 
                component={Link} 
                href="/"
                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}>
                    Home
                </Button>
                
                {/* About Us */}
                <Button
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="about-menu"
                    onClick={handleAboutMenuOpen}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        '&:hover': {
                            color: '#db531d', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            fontWeight: 'bold',
                        },
                    }}
                    >
                    About Us
                </Button>
                <Menu
                    id="about-menu"
                    anchorEl={aboutMenuAnchorEl}
                    keepMounted
                    open={Boolean(aboutMenuAnchorEl)}
                    onClose={handleAboutMenuClose}
                    >
                    <MenuItem onClick={handleAboutMenuClose}>
                        <Button 
                        color='inherit'
                        variant = "contained"
                        component={Link} 
                        href="/about/history" 
                        sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, .7)',
                            
                            },
                        }}>
                        Vision & Mission
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleAboutMenuClose}>
                        <Button 
                        color = 'inherit' 
                        component={Link} 
                        href="/about/team" 
                        variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        Our Team
                        </Button>
                    </MenuItem>
                </Menu>


                {/* Projects */}
                <Button
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="projects-menu"
                    onClick={handleProjectsMenuOpen}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        '&:hover': {
                            color: '#db531d', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            fontWeight: 'bold',
                        },
                    }}
                    >
                    Projects
                    </Button>
                    <Menu
                    id="projects-menu"
                    anchorEl={projectsMenuAnchorEl}
                    keepMounted
                    open={Boolean(projectsMenuAnchorEl)}
                    onClose={handleProjectsMenuClose}
                    >
                    <MenuItem onClick={handleProjectsMenuClose}>
                        <Button 
                        color="inherit" 
                        variant = "contained"
                        component={Link} 
                        href="/projects/vlss"
                            sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        VLSS Projects
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleProjectsMenuClose}>
                        <Button 
                        color="inherit" 
                        variant = "contained"
                        component={Link} 
                        href="/projects/govt"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        Government Projects
                        </Button>
                    </MenuItem>
                
                </Menu>

                {/* Media */}
                <Button
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="media-menu"
                    onClick={handleMediaMenuOpen}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        '&:hover': {
                            color: '#db531d', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            fontWeight: 'bold',
                        },
                    }}
                >
                    Media
                </Button>
                <Menu
                    id="media-menu"
                    anchorEl={mediaMenuAnchorEl}
                    keepMounted
                    open={Boolean(mediaMenuAnchorEl)}
                    onClose={handleMediaMenuClose}
                    >
                    <MenuItem onClick={handleMediaMenuClose}>
                        <Button 
                        color="inherit" 
                        variant = "contained"
                        component={Link} 
                        href="/photos"

                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        Photos Gallery
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleMediaMenuClose}>
                        <Button 
                        color="inherit" 
                        variant = "contained"
                        component={Link} 
                        href="/videos"

                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        Videos Gallery
                        </Button>
                    </MenuItem>
                    
                </Menu>


                {/* Get Involved Button */ }

                <Button
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="getInvolved-menu"
                    onClick={handleGetInvolvedMenuOpen}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        '&:hover': {
                            color: '#db531d', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            fontWeight: 'bold',
                        },
                    }}
                >
                    Get Involved
                </Button>
                <Menu
                    id="getInvolved-menu"
                    anchorEl={getInvolvedMenuAnchorEl}
                    keepMounted
                    open={Boolean(getInvolvedMenuAnchorEl)}
                    onClose={handleGetInvolvedMenuClose}
                    >
                    <MenuItem onClick={handleGetInvolvedMenuClose}>
                        <Button 
                        color="inherit"
                        variant = "contained" 
                        component={Link} 
                        href="/media/photos"

                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        Volunteer
                        </Button>
                    </MenuItem>
                    <MenuItem onClick={handleGetInvolvedMenuClose}>
                        <Button 
                        color="inherit" 
                        variant = "contained"
                        component={Link} 
                        href="/media/videos"

                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        Join NGO
                        </Button>
                    </MenuItem>

                    <MenuItem onClick={handleGetInvolvedMenuClose}>
                        <Button 
                        color="inherit" 
                        variant = "contained"
                        component={Link} 
                        href="/media/videos"

                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                                },
                            }}
                        >
                        NGO-Internship
                        </Button>
                    </MenuItem>
                    
                </Menu>
                
                <Button 
                    color="inherit"
                    aria-haspopup="true"
                    aria-controls="select-menu"
                    onClick={handleDownloadMenuOpen}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        '&:hover': {
                            color: '#db531d', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            fontWeight: 'bold',
                        },
                    }}
                >
                    Download
                </Button>
                <Menu
                    id="select-menu"
                    anchorEl={downloadMenuAnchorEl}
                    keepMounted
                    open={Boolean(downloadMenuAnchorEl)}
                    onClose={handleDownloadMenuClose}
                >
                    <MenuItem onClick={handleDownloadMenuClose}>
                    <Button 
                    color="inherit" 
                    variant = "contained"
                    component={Link} 
                    href="/"

                    sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            
                            },
                        }}
                    >
                        Broucher
                    </Button>
                    </MenuItem>
                    <MenuItem onClick={handleDownloadMenuClose}>
                    <Button 
                    color="inherit" 
                    variant = "contained"
                    component={Link} 
                    href="/"

                    sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            
                            },
                        }}
                    >
                        Apllication Form
                    </Button>
                    </MenuItem>
                    <MenuItem onClick={handleDownloadMenuClose}>
                    <Button 
                    color="inherit" 
                    variant = "contained"
                    component={Link} 
                    href="/Volunteer"

                    sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            
                            },
                        }}
                    >
                        Certificates
                    </Button>
                    </MenuItem>
                </Menu>

                {/*Contact Us Button */}
                <Button color="inherit" component={Link} href="/contact"
                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}>
                    Contact
                </Button>
                

                {/*Donate Us Button */}
                <Button color="inherit" component={Link} href="/donate" variant='outlined' endIcon = {<VolunteerActivismIcon/>}
                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                    marginLeft: '5px',
                    
                }}>
                    Donate
                </Button>
            </Toolbar>
        );
        

    return (
        <div>
        {/* Top Bar */}
        {isWideScreen ? topBarWide : topBarSmall}

        {/* Mobile Logo AppBar and Drawer */}
        {!isWideScreen && logoAppBarSmall}
        <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
        <Button 
            color="inherit" 
            component={Link} 
            href="/"

            sx={{
                '&:hover': {
                    color: '#db531d', // Change the color on hover
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    fontWeight: 'bold',
                },
            }}>
                Home
        </Button>
            
            {/* About Us */}
            <Button
                color='inherit'
                aria-haspopup="true"
                aria-controls="about-menu"
                onClick={handleAboutMenuOpen}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}
                >
                About Us
            </Button>
            <Menu
                id="about-menu"
                anchorEl={aboutMenuAnchorEl}
                keepMounted
                open={Boolean(aboutMenuAnchorEl)}
                onClose={handleAboutMenuClose}
                >
                <MenuItem onClick={handleAboutMenuClose}>
                    <Button color="inherit" component={Link} href="/about/history" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Vision & Mission
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleAboutMenuClose}>
                    <Button color="inherit" component={Link} href="/about/team" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Our Team
                    </Button>
                </MenuItem>
            </Menu>


            {/* Projects */}
            <Button
                color="inherit"
                aria-haspopup="true"
                aria-controls="projects-menu"
                onClick={handleProjectsMenuOpen}
                endIcon={<ArrowDropDownIcon />}

                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}
                >
                    Projects
            </Button>
                <Menu
                id="projects-menu"
                anchorEl={projectsMenuAnchorEl}
                keepMounted
                open={Boolean(projectsMenuAnchorEl)}
                onClose={handleProjectsMenuClose}
                >
                <MenuItem onClick={handleProjectsMenuClose}>
                    <Button color="inherit" component={Link} href="/projects/vlss" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    VLSS Projects
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleProjectsMenuClose}>
                    <Button color="inherit" component={Link} href="/projects/govt" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Government Projects
                    </Button>
                </MenuItem>
            </Menu>

            {/* Media */}
            <Button
                color="inherit"
                aria-haspopup="true"
                aria-controls="media-menu"
                onClick={handleMediaMenuOpen}
                endIcon={<ArrowDropDownIcon />}

                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}>
                Media
            </Button>
            <Menu
                id="media-menu"
                anchorEl={mediaMenuAnchorEl}
                keepMounted
                open={Boolean(mediaMenuAnchorEl)}
                onClose={handleMediaMenuClose}
                >
                <MenuItem onClick={handleMediaMenuClose}>
                    <Button color="inherit" component={Link} href="/photos" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Photos Gallery
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleMediaMenuClose}>
                    <Button color="inherit" component={Link} href="/videos" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Videos Gallery
                    </Button>
                </MenuItem>
                
            </Menu>


            {/* Get Involved Button */ }

            <Button
                color="inherit"
                aria-haspopup="true"
                aria-controls="getInvolved-menu"
                onClick={handleGetInvolvedMenuOpen}
                endIcon={<ArrowDropDownIcon />}

                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}>
            
                Get Involved
            </Button>
            <Menu
                id="getInvolved-menu"
                anchorEl={getInvolvedMenuAnchorEl}
                keepMounted
                open={Boolean(getInvolvedMenuAnchorEl)}
                onClose={handleGetInvolvedMenuClose}
                >
                <MenuItem onClick={handleGetInvolvedMenuClose}>
                    <Button color="inherit" component={Link} href="/media/photos" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Volunteer
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleGetInvolvedMenuClose}>
                    <Button color="inherit" component={Link} href="/media/videos" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    Join NGO
                    </Button>
                </MenuItem>

                <MenuItem onClick={handleGetInvolvedMenuClose}>
                    <Button color="inherit" component={Link} href="/media/videos" variant = "contained"
                        sx={{
                            '&:hover': {
                                color: 'white', // Change the color on hover
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                
                            },
                        }}
                    >
                    NGO-Internship
                    </Button>
                </MenuItem>
                
            </Menu>


            {/* Download Button */}
            <Button 
                color="inherit"
                aria-haspopup="true"
                aria-controls="download-menu"
                onClick={handleDownloadMenuOpen}
                endIcon={<ArrowDropDownIcon />}

                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}>
            
                Download
            </Button>
            <Menu
                id="download-menu"
                anchorEl={downloadMenuAnchorEl}
                keepMounted
                open={Boolean(downloadMenuAnchorEl)}
                onClose={handleDownloadMenuClose}
            >
                <MenuItem onClick={handleDownloadMenuClose}>
                <Button color="inherit" component={Link} href="/" variant = "contained"
                    sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        
                        },
                    }}
                >
                    Broucher
                </Button>
                </MenuItem>
                <MenuItem onClick={handleDownloadMenuClose}>
                <Button color="inherit" component={Link} href="/" variant = "contained"
                    sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            
                        },
                    }}
                >
                Apllication Form
                </Button>
                </MenuItem>
                <MenuItem onClick={handleDownloadMenuClose}>
                <Button color="inherit" component={Link} href="/Volunteer" variant = "contained"
                    sx={{
                        '&:hover': {
                            color: 'white', // Change the color on hover
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                    }}
                >
                    Certificates
                </Button>
                </MenuItem>
            </Menu>


            {/*Contact Us Button */}
            <Button color="inherit" component={Link} href="/contact"
            
                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                }}>
                Contact
            </Button>


            {/*Donate Button */}
            <Button color="inherit" component={Link} href="/donate" variant='outlined' endIcon = {<VolunteerActivismIcon/>}
            
                sx={{
                    '&:hover': {
                        color: '#db531d', // Change the color on hover
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        fontWeight: 'bold',
                    },
                    marginLeft: '50px',
                    marginRight: '50px',
                    margin: '10px',
                    padding: '10px',
                }}>
                Donate
            </Button>
        </Drawer>

        {/* App Bar for wide screens */}
        {isWideScreen && (
                <AppBar position='sticky'>
                    <Toolbar sx={{ justifyContent: 'center' }}>
                        {/* Conditionally render the logo based on the scrolling state */}
                        {trigger ? (
                            <img src="/logo.png" alt="Logo" style={{ height: '70px', marginRight: '10px', padding: '4px'}} />
                        ) : null}
                        {appBarItems}
                    </Toolbar>
                </AppBar>
            )}

        {/* Main Content */}
        <body component="main" maxWidth='100%' sx={{ marginTop: 0 }}>
            {children}
        </body>

        {/* Footer */}
        <Paper elevation={3} square className="footer-container" sx={{textAlign: 'center', padding: 2, backgroundColor: theme.palette.text.primary}}>
            {/* First Column - Our Address */}
            <div className="footer-column" >
                <Typography variant="body2" className="footer-heading" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                    Office Address:
                </Typography>
                <Typography variant="body2" className="footer-text" sx={{ color: theme.palette.primary.main }}>
                    गौ घाटी, जोधपुर उत्तर, राजस्थान, पिन कोड: 342304
                </Typography>
                <Typography variant="body2" className="footer-text" sx={{ color: theme.palette.primary.main }}>
                    Gau Ghati, Jodhpur (North), Rajasthan, 342304
                </Typography>
                <Typography variant="body2" className="footer-text" sx={{ color: theme.palette.primary.main }}>
                    <IconButton color="primary">
                        <PhoneIcon fontSize="small" />
                    </IconButton> +91 9460044823
                </Typography>
            </div>

            {/* Second Column - Contact Us */}
            <div className="footer-column">
                <Typography variant="body2" className="footer-text" color="primary">
                    Follow us on:
                </Typography>
                {/* Social Media Links */}
                <div className="social-icons">
                    <IconButton color="primary" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="primary" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton color="primary" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="primary" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <WhatsApp />
                    </IconButton>
                    <IconButton color="primary" href="https://www.youtube.com/@vlssngo" target="_blank" rel="noopener noreferrer">
                        <Youtube />
                    </IconButton>
                    <IconButton color="primary" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </IconButton>
                </div>
            </div>

            {/* Third Column - Policies */}
            <div className="footer-column">
                <Typography variant="body2" className="footer-heading" sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
                    Terms
                </Typography>
                {/* Privacy Policy Link */}
                <Link href="/privacy-policy" color="primary" sx={{ color: theme.palette.primary.main,}}>
                    Privacy Policy
                </Link>
                {/* Add additional policy links as needed */}
                <Typography variant="body2" className="footer-text" sx={{ color: theme.palette.primary.main,}}>
                    © {new Date().getFullYear()} VLSS NGO. All Rights Reserved.
                </Typography>
            </div>
        </Paper>


        </div>
    );
    };

    export default Layout;
