import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";
import userReducer from "./userReducer";
import showsReducer from "./showsReducer";


const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer
    hotels : hotelReducer,
    alertHotel : alertHotelReducer,
    usuario: userReducer,
    shows: showsReducer
    
}

export default rootReducer;