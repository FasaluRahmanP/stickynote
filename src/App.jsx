import React, { useState } from 'react'

const StickyNote = () => {

  const [input, setinput] = useState()
  const [list, setlist] = useState([])
  function inputchange(event) {
    setinput(event.target.value)
  }
  const Addbutton = () => {
    setlist([...list, input])
    setinput("")
  }
  const deletebutton = (value) => {
    const filteredlist = list.filter((_, index) => index != value)
    setlist(filteredlist)
  }
  return (
    <div>
      <h1 className='font-bold underline'>Sticky Note</h1>
      <input value={input} placeholder='Enter Your Note' onChange={inputchange}></input>
      <button onClick={Addbutton}>Add Note</button>
      <ul>
        {
          list.map((element, index) => (
            <li key={index}><span>{element}</span>
              <button onClick={() => deletebutton(index)}>Delete</button></li>

          ))
        }
      </ul>
    </div>
  )
}
export default StickyNote