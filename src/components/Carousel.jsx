import React,{useState,useEffect} from 'react'
import TitleWithImg from './TitleWithImg'
import Arrow from './Arrow'

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

return (
  <>
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
  </>)
  
}
