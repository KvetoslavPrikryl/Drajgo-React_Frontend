import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'


const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch("/api/notes/")
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div>
      <h1>Všechny Note</h1>
      <div className='notes-list'>
        {notes.map((note, index) => {
          return <ListItem key={index} note={note}/>
        })}
      </div>
    </div>
  )
}

export default NotesListPage