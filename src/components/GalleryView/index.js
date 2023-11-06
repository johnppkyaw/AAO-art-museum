import { useParams } from 'react-router-dom';

function GalleryView({galleries}) {

  const {galleryId} = useParams(); //String datatype

  const targetGallery = galleries.find(gallery => {
    return gallery.id === parseInt(galleryId);
  })

  return (
    <div>
    <h1>Hello from galleryview</h1>
    <h2>{targetGallery.name}</h2>
    </div>
  )
};

export default GalleryView;
