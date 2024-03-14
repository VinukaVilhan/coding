import { useEffect} from "react";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm/workoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {

    const{workouts, dispatch} = useWorkoutContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchWorkout = async () => {
           
                const response = await fetch('http://localhost:4000/api/workouts', {
                    headers: {
                        'Authorization' : `Bearer ${user.token}`
                        
                    }
                })
                const json = await response.json()
                if (response.ok) {
                    dispatch({type: 'SET_WORKOUTS', payload: json})
                }
        }
        if(user)
        {
            fetchWorkout()
        }
   
    }, [dispatch, user])
    

    console.log(workouts)

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=> (
                    <WorkoutDetails key={workout._id} workout ={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}
export default Home