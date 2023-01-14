import React, { useRef,useState,useEffect  }  from "react";
import Input from "../../components/Input";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../../redux/actions/toDoActions'
import hotelsActions from "../../redux/actions/hotelActions";
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'

export default function CreateNewHotel(props) {
    const cityNameImputElement = useRef(null)
    /* const continentimputElement = useRef(null); */
    const photoImputElement = useRef(null);
    const populationImputElement = useRef(null);
    let nav=useNavigate()
    let [city, setCity] = useState("");

    let{id}=props
    
    const { cities } = useSelector((state) => state.cities);
    let{token}=useSelector(state=>state.usuario)
    let { getCities } = toDoActions;

    console.log(token)

    let {newHotel}=hotelsActions
    let {alerta}=alertActions

    const dispatch= useDispatch()

    async function getCitiesF() {
        await dispatch(getCities());
    }

    useEffect(() => {
        getCitiesF();
      }, []);

    let handleCreateCity = async (event) => {
        event.preventDefault();
        
        const data = {
            
                    name: cityNameImputElement.current?.value,
                    cityId: city,
                    photo: photoImputElement.current?.value,
                    capacity: populationImputElement.current?.value,
                    userId:id
        }
             
        try{
            let res= await dispatch(newHotel({data,token}))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setTimeout(function () {
                    nav(`/hotelsDetails/${res.payload.id}`)
                }, 1000);
                
            }
            else{
               
                dispatch(alerta(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.payload.response,
                  })))
            }
        }
        catch(error){

            console.log(error)
        }
    }

    let a = (e) => {
        setCity(e.target.value);
    };

  return (
    <div className="containerAddCity">
      <h1>You want to add a new hotel?</h1>

      <form className="containerForm">
        <div className="subContainerInputsForm ">
          <Input
            ref={cityNameImputElement}
            type="text"
            id="cityName"
            placeholder="Hotel Name:"
          />
          <select className="New-text2 border2 inputAddSelect" onClick={a}>
            {cities.map((e) => (
              <option name={e.name} value={e._id}>
                {e.name}
              </option>
            ))}
          </select>
          <Input
            ref={photoImputElement}
            type="text"
            id="email"
            placeholder="Photo url:"
          />
          <Input
            ref={populationImputElement}
            type="text"
            id="population"
            placeholder="Capacity:"
          />
         
          <div className="subContainerInputsFormSecundary">
            <input className="w-50 fs-2" type="reset" value="Clear Form" />
            <input
              className="w-50 fs-2"
              onClick={handleCreateCity}
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

