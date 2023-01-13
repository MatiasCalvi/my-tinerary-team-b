import React from "react";
import "../MyCities/MyCities.css";
import { useDispatch, useSelector } from "react-redux";
import toDoActions from "../../redux/actions/toDoActions";
import MyCitiesCard from "../../components/MyCitiesCard";
import { useState, useRef, useEffect } from "react";
import Input from "../../components/Input";
import alertActions from "../../redux/actions/alertaCity";
import Swal from "sweetalert2";
import Modal from "../../components/Modal/Modal2";
import hotelsActions from "../../redux/actions/hotelActions";

export default function MyCities(props) {
  let { getCities } = toDoActions;
  let { getHotelUser,newHotel, getAndDestroy, getAndEdit } = hotelsActions;

  const dispatch = useDispatch();

  let { id } = props;

  console.log(id);

  const { cities } = useSelector((state) => state.cities);
  const { hotelAdmin } = useSelector((state) => state.hotels);
  
  console.log(cities)

  const [go, setGo] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  /* let [city, setCity] = useState(""); */

  const [name, setName] = useState("");
  const [cityId, setCityID ] = useState("");
  const [photo, setPhoto] = useState("");
  const [capacity, setCapacity] = useState("");

  let { alerta } = alertActions;

  let get = async ()=> {
    await dispatch(getHotelUser(id));
  }

    async function getCitiesF() {
        await dispatch(getCities());
    }

    useEffect(() => {
        getCitiesF();
      }, []);

  useEffect(() => {
    get();
  }, [id]);

  let listenEditGO = (id) => {
    setGo(id);
  };

  let listenEdit = async (event) => {
    event.preventDefault();

    let data = { name, cityId, photo, capacity };
    data.userId=id;
    if (
      name === "" ||
      cityId === "" ||
      photo === "" ||
      photo === null ||
      capacity === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must complete all fields !",
      });
    } else {
      try {
        let res = await dispatch(getAndEdit({ data,go }));
        console.log(res);
        if (res.payload.success) {
          Swal.fire({
            title: `${name} city has been updated`,
            imageUrl: photo,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "image",
          });
          setIsOpen(false);
          dispatch(getHotelUser(id));
        } else {
          dispatch(
            alerta(
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: res.payload.response,
              })
            )
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  let listenDeleted = (idCities, e) => {
    

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your hotel has been deleted.", "success");
        console.log(id);

        dispatch(getAndDestroy(idCities));
        dispatch(getHotelUser(id));
      }
      dispatch(getHotelUser(id));
    });
  };

  let a = (e) => {
    setCityID(e.target.value);
  };

  console.log(hotelAdmin);
  return (
    <>
      {/* <div className='inputSearch-mycities'>
        <input type="text"  onChange={e=>setUserId(e.target.value)}   placeholder="CodeAdmin..." />
        <button type='submit'
        className='save-new-button' onClick={listenInput}>
            send adminCode
         </button> 
    </div> */}
      <div className="container-mycities">
        {hotelAdmin !== undefined ? (
          hotelAdmin.map((e) => (
            <MyCitiesCard
              key={e._id}
              name={e.name}
              event1={listenDeleted}
              event2={() => setIsOpen(true)}
              go={listenEditGO}
              id={e._id}
              img={e.photo}
            />
          ))
        ) : (
          <h2 className="titleNot">No Results, please add hotels</h2>
        )}
      </div>
      <Modal editId={go} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="edit-form-container">
          <input
            htmlFor="title"
            className="new-input input"
            name="title"
            type="text"
            placeholder="Enter hotel name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            htmlFor="photo"
            className="new-input input"
            name="photo"
            type="text"
            placeholder="Enter hotel photo"
            required
            onChange={(e) => setPhoto(e.target.value)}
          />
          <select className="customSelect" onClick={a}>
            {cities.map((e) => (
              <option className="selectOptionCustom" name={e.name} value={e._id}>
                {e.name}
              </option>
            ))}
          </select>
          <input
            htmlFor="capacity"
            className="new-input input"
            name="capacity"
            type="text"
            min="0"
            placeholder="Enter hotel capacity"
            required
            onChange={(e) => Number(setCapacity(e.target.value))}
          />
          <button
            type="submit"
            className="edit-new-button input"
            onClick={listenEdit}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
}