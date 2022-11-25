import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";
import usersReducer from "./usersReducer"
import userReducer from "./userReducer";

const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer,
    hotels : hotelReducer,
    alertHotel : alertHotelReducer,
    users : usersReducer, 
    usuario: userReducer
    
}

export default rootReducer;