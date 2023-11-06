import './GalleryNavigation.css';
import { NavLink } from 'react-router-dom';

function GalleryNavigation({galleries}) {
  return (
    <nav>
    <h1>Galleries</h1>
    <NavLink exact to='/'>Home</NavLink>
    {galleries.map(gallery =>(
        <NavLink to={`/gallery/${gallery.id}`} key={gallery.id}>
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default GalleryNavigation;
