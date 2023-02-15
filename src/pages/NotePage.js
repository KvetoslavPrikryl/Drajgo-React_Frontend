import { useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NotePage = () => {
    const {id} = useParams()
    let [note, setNote] = useState(null)

    useEffect(() => {
      let getNote = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }
        getNote()
    },[id]) 

    

    let updateNote = async () => {
      fetch(`/api/notes/${id}/update`, {
        method:"PUT",
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(note)
      })
    }

    let handlerSubmit = () => {
      updateNote()
    }

  return (
    <div>
        <h1>Jeden Note</h1>
        <h3 onClick={handlerSubmit()}><Link to="/">Zpátky</Link></h3>
        <textarea onChange={(e) => {setNote({...note, "body": e.target.value})}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage