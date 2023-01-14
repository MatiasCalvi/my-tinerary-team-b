import React from "react";
import { useDispatch, useSelector } from "react-redux";
import showActions from "../../redux/actions/showActions";
import hotelActions from "../../redux/actions/hotelActions";
import MyItinerariesCard from "../../components/MyItinerariesCard/MyItinerariesCard";
import { useState, useRef } from "react";
import alertActions from "../../redux/actions/alertaCity";
import Swal from "sweetalert2";
import Modal2 from "../../components/Modal/Modal2";
import { useEffect } from "react";
import MyHotelsCard from "../../components/MyHotelsCard/MyHotelsCard";
import "../MyItineraries/MyItineraries";

export default function MyShows(props) {
  let { getShowsUser, getAndDestroy, getAndEdit, showCreator } = showActions;
  let { getHotels } = hotelActions;

  let { id, token } = props;
  let form = useRef();

  const dispatch = useDispatch();

  const { cities } = useSelector((state) => state.cities);

  const [go, setGo] = useState("");
  let [cityIdGO, setCityIdGO] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  let { alerta } = alertActions;

  const { showUsers } = useSelector((state) => state.shows);
  const { hotels } = useSelector((state) => state.hotels);
  let [hotel, setHotel] = useState("");
  const [hotelId, setHotelId] = useState("");

  async function get(id) {
    await dispatch(getShowsUser(id));
  }

  useEffect(() => {
    get(id);
  }, [id]);

  async function obtainHotels() {
    await dispatch(getHotels());
  }

  useEffect(() => {
    obtainHotels();
  }, []);

  let listenEditGO = (id) => {
    setGo(id);
  };

  let cityIdGo = (cityId) => {
    setCityIdGO(cityId);
  };

  
  let listenEdit = async (event) => {
    event.preventDefault();

    let data = {
       name, photo, price, description, date 
    };

    if (
      name === "" ||
      photo === "" ||
      photo === null ||
      description === "" ||
      date === "" ||
      price === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must complete all fields !",
      });
    } else {
      try {
        let res = await dispatch(getAndEdit({ data, go, token }));
       
        if (res.payload.success) {
          Swal.fire({
            title: `${name} Show has been updated`,
            imageUrl: photo,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "image",
          });
          setIsOpen(false);
          dispatch(getShowsUser(id));
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

  let listenDeleted = (id,e) => {

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
        Swal.fire("Deleted!", "Your Show has been deleted.", "success");
        

        dispatch(getAndDestroy({ id, token }));
        dispatch(getShowsUser(id));
      }
      dispatch(getShowsUser(id));
    });
    dispatch(getShowsUser(id));
  };

  let a = (e) => {
    setHotel(e.target.value);
  };

  async function creation(event) {
    event.preventDefault();
    let data = {};
    Array.from(form.current).forEach((input) => {
      if (input.name) {
        data[input.name] = input.value.trim();
      }
    });
    if (hotel) {
      data.hotelId = hotel;
    } else {
      data.hotelId = hotel[0]._id;
    }

    data.userId = id;
    try {
      const res = await dispatch(showCreator(data));
      if (res.payload.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Created",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
        dispatch(getShowsUser(id));
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
      console.log(error);
    }

    console.log(data);
  }

  return (
    <>
      <div className="container-myhotelsShows">
        {showUsers.length !== 0 ? (
          showUsers.map((e) => (
            <MyHotelsCard
              key={e._id}
              name={e.name}
              event1={listenDeleted}
              event2={() => setIsOpen(true)}
              go={listenEditGO}
              id={e._id}
              img={e.photo}
            />
          ))
          ) : 
          <h2 className="titleNotResults px-5 text-center">There are no results, if you prefer you can create a new show</h2>
          }
      </div>
      <Modal2 editId={go} open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="edit-form-container">
          <input
            htmlFor="name"
            className="new-input input"
            name="name"
            type="text"
            placeholder="Enter show name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            htmlFor="photo"
            className="new-input input"
            name="photo"
            type="text"
            placeholder="Enter show photos"
            required
            onChange={(e) => setPhoto(e.target.value)}
          />
          <input
            htmlFor="price"
            className="new-input input"
            name="price"
            type="number"
            placeholder="Enter show price"
            required
            onChange={(e) => Number(setPrice(e.target.value))}
          />
          <input
            htmlFor="description"
            className="new-input input"
            name="description"
            type="text"
            min="0"
            placeholder="Enter show description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            htmlFor="date"
            className="new-input input"
            name="date"
            type="date"
            placeholder="Enter show date"
            required
            onChange={(e) => Number(setDate(e.target.value))}
          />
          <button
            type="submit"
            className="edit-new-button input"
            onClick={listenEdit}
          >
            Save
          </button>
        </div>
      </Modal2>
      <div className="container-Itinerary">
        <h1 className="title-Itinerary">Create Show</h1>
        <form onSubmit={creation} ref={form} className="formItinerary">
          <select className="New-text2 border2" onClick={a}>
            {hotels.map((e) => (
              <option className="" name={e.name} value={e._id}>
                {e.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="New-text2"
          />
          <input
            type="text"
            name="photo"
            placeholder="Enter photo"
            className="New-text2"
          />
          <input
            type="text"
            name="description"
            placeholder="Enter description of show"
            className="New-text2"
          />
          <input
            type="number"
            name="price"
            placeholder="Enter price of show"
            className="New-text2"
          />
          <input
            type="date"
            name="date"
            placeholder="Enter date of the show"
            className="New-text2"
          />
          <input
            type="submit"
            className="New-Submit-Itinerary"
            required
            value="Register!"
          />
        </form>
      </div>
    </>
  );
}
