import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile.js';
import ArtDescription from '../ArtDescription/ArtDescription';

function GalleryView({galleries}) {

  const {galleryId} = useParams(); //String datatype

  const targetGallery = galleries.find(gallery => {
    return gallery.id === parseInt(galleryId);
  })

  return (
    <div>
    <h2>{targetGallery.name}</h2>
    <div className="gallery">
    <Route exact path="/galleries/:galleryId">

    {
      targetGallery.objects.map((artwork, index) => (

          <ArtImageTile art={artwork} key={index} galleryId={galleryId}/>

      ))
    }
    </Route>
    <Route path="/galleries/:galleryId/art/:artId">
      <ArtDescription gallery={targetGallery} />
    </Route>
    </div>


    </div>
  )
};

export default GalleryView;
