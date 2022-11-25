import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import hotelReducer from "./hotelReducer";
import alertHotelReducer from "./alertHotelReducer";
import userReducer from "./userReducer";

const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    hotels : hotelReducer,
    alertHotel : alertHotelReducer,
    usuario: userReducer
    
}

export default rootReducer;