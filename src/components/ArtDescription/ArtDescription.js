import { Link, useParams } from 'react-router-dom';

function ArtDescription({gallery}) {
  const {artId, galleryId} = useParams();
  const art = gallery.objects.find(art => {
    return art.id === parseInt(artId);
  })

  return (
    <div>
      <h3>{art.title}</h3>
      {
        art.images.map(image => (
          <img src={image.baseimageurl} alt={image.title}></img>
        ))
      }
      <h4>Description</h4>
      <p>{art.description || "Not Available"}</p>
      <h4>Technique</h4>
      <p>{art.technique || "Not Available"}</p>
      <h4>Credit</h4>
      <p>{art.creditline || "Not Available"}</p>
      <Link to={`/galleries/${galleryId}`}>
        Back to Gallery: {gallery.name}
      </Link>
    </div>
  )
};

export default ArtDescription;
