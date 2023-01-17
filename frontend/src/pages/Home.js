import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//Componentes
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({type:'SET_WORKOUTS', payload:json})
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
   <div className="">
    <div className="sm:workouts mx-8 bg mb-3 h-80 overflow-scroll overflow-x-hidden">
      {workouts && workouts.map((workout)=>{
        return (<WorkoutDetails key={workout._id} workout={workout}/>)
      })}
    </div>
    <WorkoutForm/>
   </div>);
};

export default Home;
