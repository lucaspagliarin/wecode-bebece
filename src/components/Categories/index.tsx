import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { CategoryCard } from '../CategoryCard'

import BannerBotas from '../../assets/categories/banner-botas.png';
import BannerScarpins from '../../assets/categories/banner-scarpins.png';
import BannerSapatilhas from '../../assets/categories/banner-sapatilhas.png';
import BannerSandalias from '../../assets/categories/banner-sandalias.png';

export function Categories() {
  const [ref] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 10,
    }
  })
  
  return (
    <div className='categories'>
      <h2>Categorias</h2>
      <div ref={ref} className='keen-slider'>
        <a href='#' className="keen-slider__slide"><CategoryCard name='Botas' image={BannerBotas}/></a>
        <a href='#' className="keen-slider__slide"><CategoryCard name='Scarpins' image={BannerScarpins}/></a>
        <a href='#' className="keen-slider__slide"><CategoryCard name='Sapatilhas' image={BannerSapatilhas}/></a>
        <a href='#' className="keen-slider__slide"><CategoryCard name='Sandalias' image={BannerSandalias}/></a>
      </div>
    </div>
  )
}