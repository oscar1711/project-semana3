import Slider from "react-slick"; // Crea la funcionalidad del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
export default function Developers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slideToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  return (
    <>

    <div className='w-1/4 m-auto mt-10 bg-violet-100 h-90 w-90 rounded-xl'>
      <div className='mt-10'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className=''>
            <div className='bg-white h-60 w-60 text-black rounded-xl my-auto mx-auto'>
              <img src={d.img} alt='' className='h-60 w-60 rounded-xl my-auto mx-auto mt-5' />
            </div><div className='flex flex-col items-center justify-center gap-5 p-5'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-center'>{d.review}</p>
              <div className="flex text-white text-lg px-4 py-2 flex items-center">
              <button  onClick={() => window.open( d.youtube , '_blank')}>
                <img src="/Images/youtube.svg" alt="YouTube" className="h-5 w-5 mr-2" /></button>
              <button  onClick={() => window.open( d.twitter , '_blank')}>
                <img src="/Images/twitter-x.svg" alt="twitter" className="h-5 w-5 mr-2" /></button>
              <button  onClick={() => window.open( d.linkedin , '_blank')}>
                <img src="/Images/linkedin.svg" alt="linkedIn" className="h-5 w-5 mr-2" /></button>
              </div> 
            </div>
            </div>
          )          
          )}
          </Slider>
      </div>
    </div>
    
    </>
    )
  } 
  const data = [
    {
      name: `Brais Moure`,
      img: `../src/assets/Fotos/perfil-brais.png`,
      review: `Developer`,
      linkedin:`https://www.linkedin.com/in/braismoure/`,
      youtube:`https://www.youtube.com/@mouredev`,
      twitter:`https://twitter.com/MoureDev`
    },
    {
      name: `Facundo`,
      img: `../src/assets/Fotos/perfil-facundo.png`,
      review: `Developer`,
      linkedin:`https://www.linkedin.com/in/braismoure/`,
      youtube:`https://www.youtube.com/@mouredev`,
      twitter:`https://twitter.com/MoureDev`
    },
    {
      name: `Fernando Herrera`,
      img: `../src/assets/Fotos/perfil-fernando.jpg`,
      review: `Software Developer`,
      linkedin:`https://www.linkedin.com/in/braismoure/`,
      youtube:`https://www.youtube.com/`,
      twitter:`https://twitter.com/MoureDev`
    },
  ];