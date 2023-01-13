import Layout from "./layout/layout";
import Home1 from "./pages/Home/Home1";
import Carousel from "./components/Carousel/Carousel";
import Cities from "./pages/Cities/Cities";
import MyCities from "./pages/MyCities/MyCities";
import MyHotels from "./pages/MyHotels/MyHotels";
import Hotels from "./pages/Hotels/Hotels";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CitiesDetails from "./pages/DetailsCities/CitiesDetails";
import HotelsDetails from "./pages/DetailsHotels/HotelsDetails";
import SignIn from "./pages/SigIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import MyItineraries from "./pages/MyItineraries/MyItineraries";
import MyShows from "./pages/MyShows/MyShows";
import NewCity from "./pages/AddCity/NewCity";
import AddHotel from "./pages/AddHotel/AddHotel";
import MyProfile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Error404 from "./pages/Error404/Error404";

import { useDispatch, useSelector } from "react-redux";
import userActions from "./redux/actions/userActions";
import { useEffect } from "react";

function App() {
  let { enterAgain } = userActions;
  let dispatch = useDispatch();
  let { logged, role, id, token } = useSelector((store) => store.usuario);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      dispatch(enterAgain(token.token.user));
    }
  }, []);

  return (
    <>
      <Layout logged={logged} role={role}>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/citiesDetails/:id" element={<CitiesDetails />} />
          <Route path="/hotelsDetails/:id" element={<HotelsDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/newcity"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                {" "}
                <NewCity id={id} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/newhotel"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                {" "}
                <AddHotel id={id} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/myitineraries"
            element={
              <ProtectedRoute isAllowed={!!logged} reDirect={"/"}>
                {" "}
                <MyItineraries id={id} token={token} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/myshows"
            element={
              <ProtectedRoute isAllowed={!!logged} reDirect={"/"}>
                {" "}
                <MyShows id={id} token={token} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/mycities"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                <MyCities id={id} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/myhotels"
            element={
              <ProtectedRoute
                isAllowed={!!logged && role === "admin"}
                reDirect={"/"}
              >
                <MyHotels id={id} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAllowed={!!logged} reDirect={"/"}>
                <MyProfile id={id} />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
