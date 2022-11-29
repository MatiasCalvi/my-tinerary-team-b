import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";


const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer
    hotels : hotelReducer,
    alertHotel : alertHotelReducer
}

export default rootReducer;