import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile.js';

function GalleryView({galleries}) {

  const {galleryId} = useParams(); //String datatype

  const targetGallery = galleries.find(gallery => {
    return gallery.id === parseInt(galleryId);
  })

  return (
    <div>
    <h1>Hello from galleryview</h1>
    <h2>{targetGallery.name}</h2>
    <Route path="/galleries/:galleryId">
    {
      targetGallery.objects.map((artwork, index) => (

          <ArtImageTile art={artwork} key={index} galleryId={galleryId}/>

      ))
    }
    </Route>


    </div>
  )
};

export default GalleryView;
