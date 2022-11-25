import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";
import usersReducer from "./usersReducer"

const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer,
    hotels : hotelReducer,
    alertHotel : alertHotelReducer,
    users : usersReducer 
}

export default rootReducer;