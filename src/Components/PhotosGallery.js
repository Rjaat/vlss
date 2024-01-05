import React from 'react';
import './PhotoGallery.css'; // Import your CSS file for styling
import {
    Container,
    Paper,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from '@mui/material';

const PhotoGallery = () => {
    // Sample data for recent photos
    const recentPhotos = [
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            imageUrl: '/Images/joel-muniz-3k3l2brxmwQ-unsplash.jpg',
        },
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            imageUrl: '/Images/atul-pandey-YNyw3bQYgG0-unsplash.jpg',
        },
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            imageUrl: '/Images/markus-winkler-wLBVAF-kMR0-unsplash.jpg',
        },
        
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            imageUrl: '/Images/9976168.jpg',
        },
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            imageUrl: '/Images/—Pngtree—charity charity simple art blue_1130816.jpg',
        },
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            imageUrl: '/Images/markus-winkler-wLBVAF-kMR0-unsplash.jpg',
        },
        // Add more recent photos as needed
    ];

    // Sample data for all photos grouped by events
    const allPhotosByEvents = [
        {
            eventName: 'Event 1',
            place: 'Venue 1',
            date: '2022-05-01',
            photos: [
                '/Images/JoinUs.jpg',
                '/Images/pexels-matthias-zomer-339620.jpg',
                '/Images/atul-pandey-0f3bZHXZSz8-unsplash.jpg',
                // Add more photos for Event 1
            ],
        },
        {
            eventName: 'Event 2',
            place: 'Venue 1',
            date: '2022-05-01',
            photos: [
                '/Images/JoinUs.jpg',
                '/Images/pexels-matthias-zomer-339620.jpg',
                '/Images/atul-pandey-0f3bZHXZSz8-unsplash.jpg',
                // Add more photos for Event 2
            ],
        },
        {
            eventName: 'Event 3',
            place: 'Venue 1',
            date: '2022-05-01',
            photos: [
                '/Images/JoinUs.jpg',
                '/Images/pexels-matthias-zomer-339620.jpg',
                '/Images/atul-pandey-0f3bZHXZSz8-unsplash.jpg',
                // Add more photos for Event 2
            ],
        },
        {
            eventName: 'Event 13',
            place: 'Venue 1',
            date: '2022-05-01',
            photos: [
                '/Images/JoinUs.jpg',
                '/Images/pexels-matthias-zomer-339620.jpg',
                '/Images/atul-pandey-0f3bZHXZSz8-unsplash.jpg',
                '/Images/markus-winkler-wLBVAF-kMR0-unsplash.jpg',
                '/Images/josh-appel-NeTPASr-bmQ-unsplash.jpg',
                'public/Images/VLSS QR Code.jpg'
            ],
        },
        {
            eventName: 'Event 3',
            place: 'Venue 1',
            date: '2022-05-01',
            photos: [
                '/Images/JoinUs.jpg',
                '/Images/pexels-matthias-zomer-339620.jpg',
                '/Images/atul-pandey-0f3bZHXZSz8-unsplash.jpg',
                // Add more photos for Event 2
            ],
        },
        {
            eventName: 'Event 4',
            place: 'Venue 1',
            date: '2022-05-01',
            photos: [
                '/Images/JoinUs.jpg',
                '/Images/pexels-matthias-zomer-339620.jpg',
                '/Images/atul-pandey-0f3bZHXZSz8-unsplash.jpg',
                // Add more photos for Event 2
            ],
        },
        
    ];

    // Function to handle opening the modal
    const openModal = (imageUrl) => {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');
        modal.style.display = 'block';
        modalImg.src = imageUrl;
    };

    // Function to handle closing the modal
    const closeModal = () => {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    };

    // Function to handle opening the modal for all images by event
    const openEventModal = (event) => {
        const modal = document.getElementById('eventModal');
        const modalContent = document.getElementById('eventModalContent');
        modal.style.display = 'block';

        let currentImageIndex = 0;

        // Function to update the modal content with the current image
        const updateModalContent = () => {
            modalContent.innerHTML = `
                <span class="close" onclick="closeEventModal()">&times;</span>
                <img class="event-photo" src="${event.photos[currentImageIndex]}" alt="Event Photo - ${currentImageIndex + 1}" />
                <div class="prev" onclick="prevImage()">&#10094;</div>
                <div class="next" onclick="nextImage()">&#10095;</div>
            `;
        };

        // Function to show the previous image
        window.prevImage = () => {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateModalContent();
            }
        };

        // Function to show the next image
        window.nextImage = () => {
            if (currentImageIndex < event.photos.length - 1) {
                currentImageIndex++;
                updateModalContent();
            }
        };
        
        // Initial display
        updateModalContent();
    };

    // Function to handle closing the event modal
    const closeEventModal = () => {
        const modal = document.getElementById('eventModal');
        modal.style.display = 'none';
    };

    return (
        <div className="photo-gallery-page">
            {/* Recent Photos Section */}
            <Container>
                {/* Modal for displaying full image */}
                <div id="myModal" className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" id="img01" alt="Full Photo" />
                </div>

                <Typography variant="h4" className="section-title">
                    Recent Photos
                </Typography>
                <div className="recent-photos-container">
                    {recentPhotos.map((photo, index) => (
                        <Card
                            className="recent-photo-card"
                            key={index}
                            onClick={() => openModal(photo.imageUrl)}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={photo.imageUrl}
                                alt={`Recent Photo - ${index + 1}`}
                            />
                            <CardContent>
                                <Typography variant="h6">{photo.eventName}</Typography>
                                <Typography>{`Place: ${photo.place}`}</Typography>
                                <Typography>{`Date: ${photo.date}`}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
            {/* All Photos Section */}
            <Container>
                <Typography variant="h4" className="section-title">
                    All Photos by Events
                </Typography>
                {allPhotosByEvents.map((event, index) => (
                    <div key={index} className="all-photo-event-card" onClick={() => openEventModal(event)}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={event.photos[0]} // Display the first image for the event
                                alt={`Event - ${index + 1}`}
                            />
                            <CardContent>
                                <Typography variant="h6">{event.eventName}</Typography>
                                <Typography>{`Place: ${event.place}`}</Typography>
                                <Typography>{`Date: ${event.date}`}</Typography>
                                {/* Add other event information here */}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Container>

            {/* Event Modal */}
            <div id="eventModal" className="modal" onClick={closeEventModal}>
                <div id="eventModalContent" className="modal-content"></div>
            </div>
        </div>
    );
};

export default PhotoGallery;