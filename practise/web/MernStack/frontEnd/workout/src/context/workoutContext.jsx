import { createContext, useReducer } from "react";
import PropTypes  from "prop-types";
import { workoutReducer } from "./workoutReducer";

export const WorkoutContext = createContext()

export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts:null
    })

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    );
}


WorkoutContextProvider.propTypes = {
children: PropTypes.node.isRequired,
}