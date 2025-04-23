import React, { useState } from 'react'

const StickyNote = () => {
  const [input, setinput] = useState("")
  const [list, setlist] = useState([])

  function inputchange(event) {
    setinput(event.target.value)
  }

  const Addbutton = () => {
    if (input.trim() === "") return
    setlist([...list, input])
    setinput("")
  }

  const deletebutton = (indexToDelete) => {
    const filteredlist = list.filter((_, index) => index !== indexToDelete)
    setlist(filteredlist)
  }

  return (
    <div style={{ paddingLeft: '500px', marginTop: '-250px' }}>
      <h1 className='font-bold'>STICKY NOTES</h1>
      <div style={{ marginTop: '50px' }}>
        <input
          value={input}
          placeholder='Enter Your Note'
          onChange={inputchange}
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <button onClick={Addbutton} style={{ padding: '10px',backgroundColor:"blue", color:"white" }}>Add Note</button>
      </div>
      <div style={{ display: 'block', gap: '10px' }}>
        {
          list.map((element, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff8b3',
                padding: '15px',
                borderRadius: '8px',
                width: '150px',
                position: 'relative',
                marginBottom: '10px',
              }}
              className='hover:scale-105 transition duration-300'
            >
              <p>{element}</p>
              <button
                onClick={() => deletebutton(index)}
                style={{
                  position: 'absolute', top: '5px', right: '5px', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '2px 6px'
                }}
              >X</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StickyNote
