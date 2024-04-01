import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { ReleaseCard } from "../ReleaseCard";

import Release1 from '../../assets/releases/sapato-vermelho.png'
import Release2 from '../../assets/releases/bota-preta.png'
import Release3 from '../../assets/releases/sapato-branco.png'

const releasesList = [
  {
    image: Release1,
    description: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
    price: 179.9,
    discount: 0,
    newPrice: 0,
  },
  {
    image: Release2,
    description: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
    price: 349.90,
    discount: 10,
    newPrice: 315.00,
  },
  {
    image: Release3,
    description: 'Scarpin Bebecê Salto Alto Taço com Fivela',
    price: 159.9,
    discount: 0,
    newPrice: 0,
  }
]

interface ReleaseProps {
  handleAddBagItems: () => void;
}

export function Releases({handleAddBagItems}: ReleaseProps) {
  const [ref] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 20,
    }
  })

  return (
    <div className='releases'>
      <h2>Lançamentos</h2>
      <div ref={ref} className='keen-slider'>
        {releasesList.map((release, id) => {
          return (
            <div className='keen-slider__slide' key={id}>
              <ReleaseCard handleAddBagItems={handleAddBagItems} release={release} />
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

