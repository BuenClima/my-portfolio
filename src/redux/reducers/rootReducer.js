import {combineReducers} from "redux";
import parallaxReducer from "./parallaxReducer";
import navBarReducer from "./navBarReducer";
import footerReducer from "./footerReducer";

const rootReducer = combineReducers({
    parallaxContent: parallaxReducer,
    navBarContent: navBarReducer,
    footerContent: footerReducer
})

export default rootReducer;