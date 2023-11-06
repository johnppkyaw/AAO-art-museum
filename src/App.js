import React from 'react';
import { Route } from 'react-router-dom';
import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation.js';
import GalleryView from './components/GalleryView';

function App() {
  console.log(harvardArt);
  return (
    <div className="page-wrapper">
    {/* <h1>Hello from App</h1> */}
    <GalleryNavigation galleries={harvardArt.records} />

    <Route path="/galleries/:galleryId">
      <GalleryView />
    </Route>

    </div>




  );
}

export default App;
