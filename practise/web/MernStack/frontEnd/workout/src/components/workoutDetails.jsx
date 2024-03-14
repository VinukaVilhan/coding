import PropTypes from "prop-types";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function WorkoutDetails({workout}) {

    const {dispatch} = useWorkoutContext()
    const {user} = useAuthContext()

    const handleClick = async () => {
        if(!user)
        {
            return
        }

        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
            
        })

        

        const json = await response.json()

        if(response.ok)
        {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return(
        <>
            <h3>{workout.title}</h3>
            <button onClick={handleClick}>Delete</button>
            <p>{new Date(workout.createdAt).toLocaleString()}</p>

        </>
    );
}

WorkoutDetails.propTypes = {
    workout: PropTypes.shape({
        title: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired
    }).isRequired,
};
