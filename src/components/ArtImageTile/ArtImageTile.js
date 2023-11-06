import { Link } from 'react-router-dom';

function ArtImageTile({art, galleryId}) {
  console.log(art);
  return (
    <div>
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt={art.title}></img>
    </Link>
    </div>
  );
}

export default ArtImageTile;
