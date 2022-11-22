import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";

const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    hotels : hotelReducer,
    alertHotel : alertHotelReducer
}

export default rootReducer;