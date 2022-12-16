import React, { useState } from 'react'
import Modal from 'react-modal'

export default function Search({addHandler}) {
    const [ModalIsOpen,setIsOpen]=useState(false)
    const[image,setImage]=useState("")
    const[rating,setRating]=useState("")
    const[description,setDescription]=useState("")
    const[date,setDate]=useState("")
    const[saisons,setSaisons]=useState("")
    const[type,setType]=useState("")
    const[name,setName]=useState("")
    console.log(name)
    const handleClick=()=>{
setIsOpen(true)
    }
    const close=()=>{
        setIsOpen(false)
    }
const addMovie=()=>{
    const newMovie={name,type,saisons,date,rating,image,description}
    addHandler(newMovie)
    close()
}

  return (
    <div style={{}}>
      
      <button onClick={handleClick}>add movie</button>
      <Modal isOpen={ModalIsOpen}>
        <div style={{}}>
        <label>image</label>
        <input onChange={(e)=> setImage(e.target.value)}/>
        <label>rating</label>
        <input onChange={(e)=>setRating(e.target.value)}/>
        <label>name</label>
        <input onChange={(e)=>setName(e.target.value)}/>
        <label>date</label>
        <input onChange={(e)=>setDate(e.target.value)}/>
        <label>type</label>
        <input onChange={(e)=>setType(e.target.value)}/>
        <label>saisons</label>
        <input onChange={(e)=>setSaisons(e.target.value)}/>
        <label>description</label>
        <input onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={close}>CLOSE</button>
        <button onClick={addMovie}>SAVE</button>
        </div>
      </Modal>
   
    </div>
  )
}


