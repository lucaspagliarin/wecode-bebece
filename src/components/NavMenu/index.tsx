
import LogoImg from '../../assets/logo-preto.png';
import BannerImage from '../../assets/banners/banner-principal-1.png'
import Close from '../../assets/icons/close.svg';
import { MenuItem } from './MenuItem';

interface NavMenuProps {
  isOpen: boolean;
  handleCloseMenu: () => void;
}

export function NavMenu({isOpen, handleCloseMenu}: NavMenuProps) {

  return (
    <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
      <div className="menu-header">
        <img src={LogoImg} />
        <button onClick={handleCloseMenu}>
          <img src={Close} />
        </button>
      </div>
      <div className="menu-banner">
        <img src={BannerImage}/>
        <div>
          <h2>Celebration - 20 anos</h2>
          <a href="">Conheça</a>
        </div>
      </div>
      <div className="menu-items">
        <ul>
          <li><a href="#">Liquida</a></li>
          <MenuItem title="Sapatos"/>
          <MenuItem title="Sandálias"/>
          <MenuItem title="Botas"/>
          <MenuItem title="Tênis"/>
          <li><a id="outlet" href="#">Outlet</a></li>
        </ul>
      </div>
    </nav>
  )
}