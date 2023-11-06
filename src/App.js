import React from 'react';
import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation.js';

function App() {
  console.log(harvardArt);
  return (
    <div>
    {/* <h1>Hello from App</h1> */}
    <GalleryNavigation galleries={harvardArt.records} />
    </div>
  );
}

export default App;
