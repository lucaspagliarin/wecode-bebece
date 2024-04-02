import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { ReleaseCard } from "../ReleaseCard";

import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/getProducts';

interface ReleaseProps {
  handleAddBagItems: () => void;
}

export interface ReleaseListProps {
  name: string;
  image: string;
  price: {
    amount: number;
    isDiscount?: number | null;
  }
  id: number;
}

export function Releases({handleAddBagItems}: ReleaseProps) {
  const [releasesList, setReleasesList] = useState<ReleaseListProps[]>([])
  
  async function getReleases() {
    const products = await getProducts();
    setReleasesList(products)
  }

  useEffect(() => {
    getReleases()
  }, [])

  const [ref] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 20,
    }
  })

  return (
    <div className='releases'>
      <h2>Lançamentos</h2>
      {releasesList.length > 0 && (
      <div ref={ref} className='keen-slider'>
        {releasesList.map((release) => {
          return (
            <div className='keen-slider__slide' key={release.id}>
              <ReleaseCard handleAddBagItems={handleAddBagItems} release={release} />
            </div>
          )
        })}
        
      </div>
      )}
    </div>
  )
}

