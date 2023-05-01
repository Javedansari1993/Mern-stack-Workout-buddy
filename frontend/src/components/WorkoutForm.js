import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const workout = {title, load,reps}
        const response = await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if (!response) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new Workout added',json)
            dispatch({type:'CREATE_WORKOUTS', payload:json})
        }
    }
  return (
    <div>
            <div className="mt-5 mx-8 md:col-span-2 md:mt-0 bg-slate-400 sm:rounded-sm">
            <form onSubmit={handleSubmit} className="m-3">
                <h1 className='m-2 p-2 font-bold'>Add a New Workout</h1>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-slate-400 px-4 py-5 sm:p-6">
                  <div className="flex flex-col">
                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Excersize Title
                      </label>
                      <input
                        type="text"
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                        // name="title"
                        id="first-name"
                        autoComplete="given-name"
                        className={`${emptyFields.includes('title') ? 'border border-red-500' : ''} mt-1 h-7 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h`}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Load(in kg):
                      </label>
                      <input
                        type="number"
                        onChange={(e)=>setLoad(e.target.value)}
                        value={load}
                        // name="load"
                        id="email-address"
                        autoComplete="email"
                        className={`${emptyFields.includes('load') ? 'border border-red-500' : ''} mt-1 h-7 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Reps:
                      </label>
                      <input
                        type="number"
                        onChange={(e)=>setReps(e.target.value)}
                        value={reps}
                        // name="reps"
                        id="street-address"
                        autoComplete="street-address"
                        className={`${emptyFields.includes('reps') ? 'border border-red-500' : ''} mt-1 h-7 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-slate-400 px-4 py-3 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Workout
                  </button>
                </div>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
    </div>
  )
}

export default WorkoutForm