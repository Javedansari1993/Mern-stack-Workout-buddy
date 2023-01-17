import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
//date fns
import  formatDistanceToNow  from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()
    const handleClick = async()=>{
        const response = await fetch("/api/workouts/" + workout._id,{
            method:"DELETE"
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'DELETE_WORKOUTS', payload:json})
        }
    }

  return (
    <div className='bg-green-200 my-4 p-4 rounded-md'>
      <h4 className='text-green-900 text-lg'>{workout.title}</h4>
      <p><strong>Load (kg):</strong>{workout.load}</p>
      <p><strong>Reps:</strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      <span className='border-rose-600 border-2 text bg-red-200 rounded-md hover:bg-red-400 cursor-pointer' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails