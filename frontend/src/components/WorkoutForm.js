import React from 'react'
import { useState } from 'react';

const WorkoutForm = () => {
    const [title, settitle] = useState('');
    const [load, setload] = useState('');
    const [reps, setreps] = useState('');
    const [error, seterror] = useState('');

    const handleSumit = async (e) =>
    {
        e.preventDefault()
        const workout = {title,load,reps}

        const response = await fetch("/api/routes/", {
            method : 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            settitle('')
            setload("")
            setreps("")
            seterror(json.error)
        }

        if(response.ok){
            seterror(null)
            console.log("new workout added", json)
        }
    }
  return (
    <form className='create' onSubmit={handleSumit}>
        <h3>Add new workout</h3>
        <label>Exercize title:</label>
        <input 
        type="text" 
        onChange={(e)=> settitle(e.target.value)} 
        value={title}></input>
        <label>Load (KG):</label>
        <input 
        type="number" 
        onChange={(e)=>setload(e.target.value)} 
        value={load}></input>
        <label>Reps:</label>
        <input 
        type="number" 
        onChange={(e)=>setreps(e.target.value)} 
        value={reps}></input>

        <button>Add workout</button>
        {error && <div className='error'>{error}</div> }
    </form>
  )
}

export default WorkoutForm