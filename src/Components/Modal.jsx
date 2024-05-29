import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { v4 } from 'uuid'

const Modal = () => {
    const id = v4().slice(0, 8)
    const { lang, setUpdate, update, modal, title, text, setTitle, setText, setModal, setNotes, notes } = useContext(Context)
    const cancel = () => {
        setTitle('')
        setText('')
        setModal(false)
        setUpdate({ note: {}, edit: false })
    }

    const addNote = () => {
        if (title.trim().length > 2 && text.trim().length > 2) {
            const newNote = {
                id: update.edit ? update.note.id : id,
                date: new Date().toLocaleDateString(),
                title: title,
                text: text
            }
            if (update.edit) {
                setNotes(notes.map(note => note.id == update.note.id ? newNote : note))
                setUpdate({ note: {}, edit: false })

            } else {
                setNotes([...notes, newNote])
            }
            cancel()
        } else {
            alert("Text and Title must be minimum 3 symbols")
        }
    }
    return (
        <div className={`modal ${modal && 'active'}`}>
            <div className="modal_card">
                <h2 className="modal_title">{update.edit ? lang.titlewindowedit : lang.titlewindow}</h2>
                <label >
                    <span>Title</span>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label >
                    <span>Content</span>
                    <input type="text" placeholder='Content' value={text} onChange={(e) => setText(e.target.value)} />
                </label>
                <div className="modal_btns">
                    <button className="btn btn_danger" onClick={cancel}><span>Bekor qilish</span></button>
                    <button className="btn btn_primary" onClick={addNote}><span>{update.edit ? lang.editbtn : lang.addbtn}</span></button>
                </div>
            </div>
        </div>
    )
}

export default Modal