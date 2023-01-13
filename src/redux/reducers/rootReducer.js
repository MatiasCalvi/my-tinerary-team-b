import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";
import usersReducer from "./usersReducer"
import userReducer from "./userReducer";
import showsReducer from "./showsReducer";
import reactionsReducer from "./reactionsReducer"

const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer,
    hotels : hotelReducer,
    alertHotel : alertHotelReducer,
    users : usersReducer, 
    usuario: userReducer,
    shows: showsReducer,
    newReaction: reactionsReducer,
}

export default rootReducer;