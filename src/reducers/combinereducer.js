import firstnamereducer from "./firstnamereducer";
import lastnamereducer from "./lastnamereducer";
import scorereducer from "./scorereducer";

const { combineReducers } = require("redux");


const allreducers = combineReducers({
    firstnamered : firstnamereducer,
    lastnamered : lastnamereducer,
    scorered : scorereducer
})

export default allreducers