import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import './workoutForm.css'
import { useWorkoutContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function WorkoutForm()
{
    const{dispatch} = useWorkoutContext('')
    const[title, setTitle]=useState('')
    const[load, setLoad]=useState('')
    const[reps, setReps]=useState('')
    const[error, setError] = useState('')
    const[emptyFields, setEmptyFields] = useState([])
    const {user} = useAuthContext()

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        if(!user)
        {
            setError('You must be logged in')
            return 
        }

        const workout = {title, load, reps}

        const response = await fetch('http://localhost:4000/api/workouts', {
            method:'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok)
        {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok)
        {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New excercise added')
            console.log(json)
            setEmptyFields([])
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="input1">Excercise</label>
            <input className={emptyFields.includes('title') ? 'error': ''} id="input1" name="input1" type="text" onChange={(evt) => setTitle(evt.target.value)} value={title} required />
            <label htmlFor="input2">Reps</label>
            <input className={emptyFields.includes('reps') ? 'error': ''} id="input2" name="input2"  type="number" onChange={(evt) => setReps(evt.target.value)} value={reps} required/>
            <label htmlFor="input3">Load</label>
            <input className={emptyFields.includes('load') ? 'error': ''} id="input3" name="input3" type="number" onChange={(evt) => setLoad(evt.target.value)} value={load} required/>
             <Button variant="dark" type="submit">Submit</Button>
            
             {error && <div className="error">{error}</div>}
        </form>
        </>
    );
}
