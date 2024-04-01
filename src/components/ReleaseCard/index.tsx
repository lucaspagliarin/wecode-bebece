
import ShoppingBag from '../../assets/icons/shopping-bag.svg'
import LikeDefault from '../../assets/icons/Property 1=Default.svg'
import { useState } from 'react';
import LikeVariant from '../../assets/icons/Property 1=Variant2.svg'
import { formatPrice } from '../../utils/priceFormatter';
import { toast } from 'react-toastify';

interface ReleaseCardProps {
  release: {
    image: string;
    description: string;
    price: number;
    discount: number;
    newPrice: number;
  }
  handleAddBagItems: () => void;
}

export function ReleaseCard({ release, handleAddBagItems }: ReleaseCardProps) {
  const { image, description, price, discount, newPrice } = release;

  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked)
  }

  function handleAddItem() {
    handleAddBagItems();
    toast('Adicionado ao Carrinho', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }

  return (
    <>
      <div className='release-card'>
        <div className='release-card-actions-top'>
          <button onClick={handleLike}>
            <img src={liked ? LikeVariant : LikeDefault} />
          </button> 
        </div>
        <img src={image} />
        <div className='release-card-actions-bottom'>
          <button onClick={handleAddItem}>
            <img src={ShoppingBag} />
          </button>
          <span>{discount > 0 ? discount + '% OFF' : ''}</span>
        </div>
      </div>
      <div className='release-card-infos'>
        <p>{ description }</p>
        {discount > 0 ? 
          <div>
            <span className='dashed'>{formatPrice(price)}</span> 
            <span>  {formatPrice(newPrice)}</span>
          </div>
          : 
          <span>{formatPrice(price)}</span>
        }
      </div>

    </>
  )
}