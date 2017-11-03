import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //not state.push, because we mustn't manipulate existing  state, we must return new state
            // od JS: return state.concat([action.payload.data]);
            //ES6:
            return [ action.payload.data, ...state ];
    }
    return state;
}