import React, { useContext } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from '../Context/Context';
const Note = ({ note }) => {
    const { lang ,delNote,changeNote} = useContext(Context)
    return (
        <div className='notes_card'>
            <h2 className="notes_card_title">{note.title}</h2>
            <p className="notes_card_date">{note.date}</p>
            <p className="notes_card_text">{note.text}</p>
            <div className="notes_card_btns">
                <button className="btn btn_primary" onClick={()=>changeNote(note)}><FaPencilAlt /> <span>{lang.editbtn}</span></button>
                <button className="btn btn_danger" onClick={() => delNote(note.id)}><FaTrashAlt /><span>{lang.deledit}</span></button>
            </div>
        </div>
    )
}

export default Note