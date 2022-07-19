import React from 'react'
import { useEffect,useState } from 'react'

//components
import WorkoutDetail from '../components/WorkoutDetail';
import WorkoutForm from '../components/WorkoutForm';
const Home = () => {
    const [workouts, setworkouts] = useState(null);
    useEffect(()=>{
        const fetchWorkouts = async () =>{
            const response = await fetch("/api/routes/")
            const json = await response.json()
            console.log(json)

            if(response.ok){
                setworkouts(json)
            }
        }

        fetchWorkouts()
    }, [])
  return (
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout)=>(
                <WorkoutDetail key={workout._id} workout={workout}></WorkoutDetail>
            ))}
        </div>
        <WorkoutForm></WorkoutForm>
    </div>
  )
}

export default Home
 