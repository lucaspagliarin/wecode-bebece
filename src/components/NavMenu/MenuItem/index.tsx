import { useState } from 'react';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

interface MenuItemProps {
  title: string;
}

export function MenuItem({ title }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return(
    <li>
      <a href="#" onClick={handleOpenMenu}>
        <div className={isOpen ? 'menu-item-row rotated' : 'menu-item-row'}>
          <span>{title}</span>
          <img src={ArrowRight}/>
        </div>
      </a>
      <ul className={isOpen ? 'sublist' : 'sublist closed'}>
        <li><a href="#">Scarpins</a></li>
        <li><a href="#">Mocassim</a></li>
        <li><a href="#">Sapatilhas</a></li>
        <li><a href="#">Mules</a></li>
        <li><a href="#">Peep Toe</a></li>
        <li><a href="#">Oxford</a></li>
      </ul>
    </li>
  )
}