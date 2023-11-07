import './GalleryNavigation.css';
import { NavLink } from 'react-router-dom';

function GalleryNavigation({galleries}) {
  return (
    <nav>
    <h1>Galleries</h1>
    <div className = "navigator">
    <NavLink exact to='/'>Home</NavLink>
    {galleries.map(gallery =>(
        <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
          {gallery.name}
        </NavLink>
      ))}
    </div>
    </nav>
  )
}

export default GalleryNavigation;
