import React, { useRef,useState  }  from "react";
import Input from "../../components/Input";
import "./newcity.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../../redux/actions/toDoActions'
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'

export default function CreateNewCity(props) {
    const cityNameImputElement = useRef(null)
    const continentimputElement = useRef(null);
    const photoImputElement = useRef(null);
    const populationImputElement = useRef(null);
    let nav=useNavigate()
    
    let{id}=props
    console.log(id)

    let{token}=useSelector(state=>state.usuario)

    console.log(token)

    let {newCity}=toDoActions
    let {alerta}=alertActions

    const dispatch= useDispatch()


    let handleCreateCity = async (event) => {
        event.preventDefault();
        const data = {
            
                    name: cityNameImputElement.current?.value,
                    continent: continentimputElement.current?.value,
                    photo: photoImputElement.current?.value,
                    population: populationImputElement.current?.value,
                    userId:id
        }
               
        try{
            let res= await dispatch(newCity({data,token}))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setTimeout(function () {
                    nav(`/citiesDetails/${res?.payload?.id}`)
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

  return (
    <div className="containerAddCity">
      <h1>You want to add a new city?</h1>

      <form className="containerForm">
        <div className="subContainerInputsForm ">
          <Input
            ref={cityNameImputElement}
            type="text"
            id="cityName"
            placeholder="City Name:"
          />
          <Input
            ref={continentimputElement}
            type="text"
            id="continent"
            placeholder="Continent:"
          />
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
            placeholder="Population:"
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
