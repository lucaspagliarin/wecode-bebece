import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css"


import Banner1 from '../../assets/banners/banner-principal-1.png';
import Banner2 from '../../assets/banners/banner-principal-2.png';
import Banner3 from '../../assets/banners/banner-principal-3.png';

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <div className='main_banner'> 
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide'>
          <img src={Banner1} />
        </div>
        <div className='keen-slider__slide'>
          <img src={Banner2} />
        </div>
        <div className='keen-slider__slide'>
          <img src={Banner3} />
        </div>
      </div>
      <div className='banner-actions'>
        <button>Conheça agora!</button>

      {loaded && instanceRef.current && (
        <div className='dots'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}

                className={"dot" + (currentSlide === idx ? " active": "")}
              
              ></button>
            )
          })}
        </div>
      )}

      </div>
    </div>
  )
}