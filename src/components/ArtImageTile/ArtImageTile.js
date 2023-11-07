import { Link } from 'react-router-dom';

function ArtImageTile({art, galleryId}) {
  if(art.images.length > 0) {
    return (
      <div>
      <Link to={`/galleries/${galleryId}/art/${art.id}`}>
        <img src={art.images[0].baseimageurl} alt={art.title} />
      </Link>
      </div>
    );
  } else {
    return (
      <div>
      <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src="data:," alt={art.title} />
      </Link>
      </div>
    )
  }
}

export default ArtImageTile;
