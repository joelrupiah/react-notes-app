import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'

const NotePage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  let noteId = id

  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  let getNote = async () => {
    let response = await fetch(`/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    fetch(`/notes/${noteId}/update`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/')
  }

    return (
        <div className="note">
          <div className="note-header" onClick={() => handleSubmit()}>
            <h3>
              <ArrowLeft />
            </h3>
          </div>
          <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NotePage
