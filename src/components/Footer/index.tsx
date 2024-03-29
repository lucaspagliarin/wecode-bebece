import Logo from '../../assets/logo-bege.svg';

import FacebookLogo from '../../assets/socials/facebook.svg';
import InstagramLogo from '../../assets/socials/instagram.svg';
import PinterestLogo from '../../assets/socials/pinterest.svg';
import TiktokLogo from '../../assets/socials/tik-tok.svg';
import TwitterLogo from '../../assets/socials/twitter.svg';

export function Footer() {
  return (
    <footer className='footer'>
      <img src={Logo} alt="logo"/>
      <div className='footer-icons'>
        <a href='#'>
          <img src={InstagramLogo} />
        </a>
        <a href='#'>
          <img src={FacebookLogo} />
        </a>
        <a href='#'>
          <img src={PinterestLogo} />
        </a>
        <a href='#'>
          <img src={TwitterLogo} />
        </a>
        <a href='#'>
          <img src={TiktokLogo} />
        </a>
      </div>
      <div className='footer-links'>
        <h2>Sobre a empresa</h2>
        <div>
          <a href="#">Quem Somos</a>
          <a href="#">Fale Conosco</a>
        </div>
      </div>
      <div className='footer-links'>
        <h2>Políticas</h2>
        <div>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Entrega</a>
          <a href="#">Política de Cupom e Descontos</a>
        </div>
      </div>
    </footer>
  )
}