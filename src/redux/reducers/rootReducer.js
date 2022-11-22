import alertReducer from "./alertaCityReducer";
import toDoReducer from "./toDoReducer"
import itineraryReducer from "./itineraryReducer";

const rootReducer={
    cities : toDoReducer,
    alerta : alertReducer,
    itinerary: itineraryReducer
}

export default rootReducer;