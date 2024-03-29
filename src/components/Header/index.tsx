
import LogoImg from '../../assets/logo-branco.png';
import LogoImgBlack from '../../assets/logo-preto.png';

import SearchIcon from '../../assets/icons/icone-search.png';
import AccountIcon from '../../assets/icons/icone-conta.png';
import MenuIcon from '../../assets/icons/icone-menu.png';
import BagIcon from '../../assets/icons/icone-shopping-bag.png';

import SearchIconBlack from '../../assets/icons/icone-search-black.png';
import AccountIconBlack from '../../assets/icons/icone-conta-black.png';
import MenuIconBlack from '../../assets/icons/icone-menu-black.png';
import BagIconBlack from '../../assets/icons/icone-shopping-bag-black.png';


import { useState } from 'react';

export function Header() {
  
  const [scrolled, setScrolled] = useState(false);
  
  const handleColorChange = () => {
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', handleColorChange); 

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div>
        <span className='header_icon'>
          <img src={scrolled ? MenuIconBlack : MenuIcon} />
        </span>
        <span className='header_icon'>
          <img src={scrolled ? SearchIconBlack : SearchIcon} />
        </span>
      </div>
      <div>
        <img src={scrolled ? LogoImgBlack : LogoImg} alt='logo'/>
      </div>
      <div>
        <span className='header_icon'>
          <img src={scrolled ? AccountIconBlack : AccountIcon} />
        </span>
        <span className='header_icon_cart'>
          <img src={scrolled ? BagIconBlack : BagIcon} />
          <span>0</span>
        </span>
      </div>
    </header>
  )
}