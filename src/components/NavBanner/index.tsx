import BannerSm from '../../assets/banner-pequeno.png';
import BannerBg from '../../assets/banner-grande.png';


export function NavBanner() {
  return (
    <div className='navbanner'>
      <img src={BannerSm} alt=""/>
      <img src={BannerBg} alt=""/>
    </div>
  )
}