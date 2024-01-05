// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Components/HomePage';
import AboutUsPage from './Components/AboutUsPage';
import ProjectsPage from './Components/ProjectsPage';
import VideosGallery from './Components/VideosGallery';
import PhotosGallery from './Components/PhotosGallery';
import GetInvolvedPage from './Components/GetInvolvedPage';
import DownloadPage from './Components/DownloadPage';
import ContactPage from './Components/ContactPage';
import DonatePage from './Components/DonatePage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/photos" element={<PhotosGallery />} />
          <Route path="/videos" element={<VideosGallery />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
