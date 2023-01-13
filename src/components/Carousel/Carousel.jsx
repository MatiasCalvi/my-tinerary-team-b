/* import React,{useState,useEffect} from 'react'
import TitleWithImg from '../TitleWithImg'
import Arrow from '../Arrow'
import "./carousel.css"

export default function Carousel() 
{
  let [hotels,sethotels]=useState([])
  let [cities,setcities]=useState([])
  let [generalEstate,setGeneral]=useState([])
  let [number, setNumber] = useState(0)
  let [numberA,setNumberA] = useState(1) 
  let [timeId,setTimeId] = useState(0)
  let [timeIdA,setTimeIdA] = useState(0)

  console.log(generalEstate)

  useEffect(()=>{
    fetch('./data/dataHousing.json')
    .then(hotels=>hotels.json())
    .then(hotels=>sethotels(hotels.map(element=>({hotel:element.name,photoHotels:element.photo,idHotel:element.citiId}))))
    .catch(error=>console.log(error))
  },[])
  
  useEffect(()=>{
    fetch('./data/dataCities.json')
  .then(cities=>cities.json())
  .then(city=>{
    setcities(city.map(element=>({city:element.name,photoCity:element.photo,idCity:element.id})))
  })
  .catch(error=>console.log(error))
  },[])

  useEffect(() => {
    let id = setInterval(()=> {
        clickAfter()        
      },3000
    )
    setTimeId(id)
    return ()=> {clearInterval(timeId)}},[generalEstate,number])
  
    useEffect(() => {
      let id = setInterval(()=> {
          clickAfter()        
        },3000
      )
      setTimeIdA(id)
      return ()=> {clearInterval(timeIdA)}},[generalEstate,numberA])
    

  let clickAfter = () => {
    if (number+1 < generalEstate.length - 1) {
      setNumber(number+1);
    } else {
      setNumber(0);
    }
    clearInterval(timeId)
    
    if (numberA+1 < generalEstate.length - 1) {
      setNumberA(numberA+1);
    } else {
      setNumberA(0);
    }
    clearInterval(timeIdA)
  };

  let clickBefore = () => {
    if (number>0) {
      setNumber(number-1)
    } else {
      setNumber(generalEstate.length-1)
    }
    clearInterval(timeId)

    if (numberA > 0) {
      setNumberA(numberA-1);
    } else {
      setNumberA(generalEstate.length-1)
    }
    clearInterval(timeIdA)
  };
  useEffect(()=>{
    let general=[]
    for(let i in cities){
      general.push({city:cities[i].city,photoCity:cities[i].photoCity,hotel:hotels[i].hotel,photoHotel:hotels[i].photoHotels})
    }
    setGeneral(general) 
  },[hotels,cities])

return (<>
  
  <section className='section-carousel'>
      <div className='c-carousel'>
          <div className='c-titulo-img'>
            <TitleWithImg name={generalEstate[number]?.city} photo={generalEstate[number]?.photoCity}></TitleWithImg>
            <TitleWithImg name={generalEstate[numberA]?.city} photo={generalEstate[numberA]?.photoCity}></TitleWithImg>
          </div>
          <div className='c-titulo-img'>
            <TitleWithImg name={generalEstate[number]?.hotel} photo={generalEstate[number]?.photoHotel[0]}></TitleWithImg>
            <TitleWithImg name={generalEstate[numberA]?.hotel} photo={generalEstate[numberA]?.photoHotel[0]}></TitleWithImg>
          </div>
          <div className='arrows-container'>
            <Arrow icono="&#129044;" evento={clickBefore}></Arrow>
            <Arrow icono="&#129046;" evento={clickAfter}></Arrow>
          </div>
      </div>
  </section>
  
 </>)
} */
import React, { useEffect, useState } from "react";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  let [hotels, sethotels] = useState([]);
  let [cities, setcities] = useState([]);

  useEffect(() => {
    fetch("./data/dataHousing.json")
      .then((hotels) => hotels.json())
      .then((hotels) =>
        sethotels(
          hotels.map((element) => ({
            hotel: element.name,
            photoHotels: element.photo,
            idHotel: element.citiId,
          }))
        )
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("./data/dataCities.json")
      .then((cities) => cities.json())
      .then((city) => {
        setcities(
          city.map((element) => ({
            city: element.name,
            photoCity: element.photo,
            idCity: element.id,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  

  return (
    <>
      <div className="divHome-carrousel"></div>
      <h2 className='tituloHome-carrousel'> Cities </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[0]?.city}</h2>
          <img className="imagen-carrusel" src={cities[0]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[1]?.city}</h2>
          <img className="imagen-carrusel" src={cities[1]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[2]?.city}</h2>
          <img className="imagen-carrusel" src={cities[2]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[3]?.city}</h2>
          <img className="imagen-carrusel" src={cities[3]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[4]?.city}</h2>
          <img className="imagen-carrusel" src={cities[4]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[5]?.city}</h2>
          <img className="imagen-carrusel" src={cities[5]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[6]?.city}</h2>
          <img className="imagen-carrusel" src={cities[6]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[7]?.city}</h2>
          <img className="imagen-carrusel" src={cities[7]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel"> {cities[8]?.city}</h2>
          <img className="imagen-carrusel" src={cities[8]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[9]?.city}</h2>
          <img className="imagen-carrusel" src={cities[9]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[10]?.city}</h2>
          <img className="imagen-carrusel" src={cities[10]?.photoCity} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{cities[11]?.city}</h2>
          <img className="imagen-carrusel" src={cities[11]?.photoCity} alt="" />
        </SwiperSlide>
      </Swiper>
      <h2 className="tituloHome-carrousel2"> Hotels </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[0]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[0]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[1]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[1]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[2]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[2]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[3]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[3]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[4]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[4]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[5]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[5]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[6]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[6]?.photoHotels[0]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[7]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[7]?.photoHotels[0]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[8]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[8]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[9]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[9]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[10]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[10]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="tituloSlide-carrousel">{hotels[11]?.hotel}</h2>
          <img
            className="imagen-carrusel"
            src={hotels[11]?.photoHotels[2]}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
