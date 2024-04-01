import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'


import Post1 from '../../assets/blog/image1.png'
import Post2 from '../../assets/blog/image2.png'
import Post3 from '../../assets/blog/image3.png'

import { BlogPost } from '../BlogPost'
import { useState } from 'react'

const postList = [
  {
    image: Post1,
    title: 'NOVO LOGO, MESMA ESSÊNCIA.',
    description: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
    link: "#",
  },
  {
    image: Post2,
    title: 'É AMANHÃ',
    description: 'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
    link: "#",
  },
  {
    image: Post3,
    title: 'DESCUBRA O GLAMOUR EM CADA PASSO.',
    description: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨',
    link: "#",
  },
]


export function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 20,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <div className='blog'>
      <div>
        <h2>Conheça mais</h2>
        <p>Fique por dentro de tudo que acontece na Bebecê.</p>
      </div>
      <div ref={ref} className='keen-slider'>
        {postList.map((post, id) => {
          return (
            <div className='keen-slider__slide' key={id}>
              <BlogPost post={post}/>
            </div>
          )
        })}
        
      </div>
      <div className='blog-actions'>
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

                className={"dot" + (currentSlide === idx ? " active-black": "")}
              
              ></button>
            )
          })}
        </div>
      )}
      </div>
    </div>
  )
}

