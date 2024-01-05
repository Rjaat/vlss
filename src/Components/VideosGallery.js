// VideoGallery.js

import React from 'react';
import './VideoGallery.css';
import { Container, Typography, Card, CardContent } from '@mui/material';
import YouTube from 'react-youtube';

const recentVideosData = [
    {
        title: 'Video 1',
        videoId: 'uC_6d03yKhc', // Extract the video ID from the YouTube link
        event: 'Event A',
        place: 'Location A',
        date: '2024-01-01',
    },
    {
        title: 'Video 2',
        videoId: 'k10UsmikUR4',
        event: 'Event B',
        place: 'Location B',
        date: '2024-01-15',
    },
    {
        title: 'Video 3',
        videoId: 'pFrJEVePSDM',
        event: 'Event B',
        place: 'Location B',
        date: '2024-01-15',
    },
    {
        title: 'Video 4',
        videoId: 'ANw8iQCW5D0',
        event: 'Event B',
        place: 'Location B',
        date: '2024-01-15',
    },
    // Add more recent video data as needed
];

const allVideosData = [
    {
        title: 'Video 3',
        videoId: 'VIDEO_ID_3',
        event: 'Event C',
        place: 'Location C',
        date: '2024-02-01',
    },
    {
        title: 'Video 4',
        videoId: 'VIDEO_ID_4',
        event: 'Event D',
        place: 'Location D',
        date: '2024-02-15',
    },
    // Add more all videos data as needed
];

const VideoGallery = () => {
    const opts = {
        height: '200',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="video-gallery-page">
            {/* Recent Videos Section */}
            <Container>
                <Typography variant="h4" className="section-title">
                    Recent Videos
                </Typography>
                <div className="recent-videos-container">
                    {recentVideosData.map((video, index) => (
                        <Card className="video-card" key={index}>
                            <CardContent>
                                <YouTube
                                    videoId={video.videoId}
                                    opts={opts}
                                    containerClassName="youtube-container"
                                />
                                <Typography variant="h6">{video.event}</Typography>
                                <Typography>{`Place: ${video.place}`}</Typography>
                                <Typography>{`Date: ${video.date}`}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>

            {/* All Videos Section */}
            <Container>
                <Typography variant="h4" className="section-title" >
                    All Videos
                </Typography>
                <div className="all-videos-container">
                    {allVideosData.map((video, index) => (
                        <Card className="video-card" key={index}>
                            <CardContent>
                                <YouTube
                                    videoId={video.videoId}
                                    opts={opts}
                                    containerClassName="youtube-container"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default VideoGallery;
