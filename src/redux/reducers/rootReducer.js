import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";
import usersReducer from "./usersReducer"
import userReducer from "./userReducer";
import reactionsReducer from "./reactionsReducer"

import showsReducer from "./showsReducer";


const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer,
    hotels : hotelReducer,
    alertHotel : alertHotelReducer,
    newReaction: reactionsReducer,

    users : usersReducer ,
    usuario: userReducer,
    shows: showsReducer,

}

export default rootReducer;