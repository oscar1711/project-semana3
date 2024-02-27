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
              <button  onClick={() => window.open( `https://www.google.com/maps/place/C.C+Gran+Estacion+Costado+Esfera+Local+3-09/@4.6465556,-74.1036186,18z/data=!4m6!3m5!1s0x8e3f9b2186539871:0x558c0600f7ece033!8m2!3d4.6467668!4d-74.1033343!16s%2Fg%2F11ff207jht?hl=es&entry=ttu` , '_blank')} >
            <img src="../src/assets/Fotos/map.jpeg" alt="YouTube" className="h-10 w-10 mr-2" />
            </button>
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
      name: `KFC`,
      img: `../src/assets/Fotos/KFC.jpeg`,
      review: `Reconocida cadena global de restaurantes de comida rápida especializada en pollo frito.`
    },
    {
      name: `MCDONALDS`,
      img: `../src/assets/Fotos/MCDONALDS.jpeg`,
      review: `McDonald's es una cadena internacional de restaurantes de comida rápida conocida por sus hamburguesas, papas fritas y otros productos alimenticios.`
    },
    {
      name: `BURGER KING`,
      img: `../src/assets/Fotos/BURGERKING.jpeg`,
      review: `Burger King es una cadena global de restaurantes de comida rápida reconocida por su amplia selección de hamburguesas, incluyendo la famosa Whopper`
    },
    {
      name: `CREPES AND WAFFLES`,
      img: `../src/assets/Fotos/CREPES.jpeg`,
      review: `Crepes & Waffles es una cadena de restaurantes originaria de Colombia, conocida por sus crepes dulces y salados`
    },
  ];