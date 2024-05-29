import React, { useContext, useState } from 'react'
import { IoMdGrid } from "react-icons/io";
import { FaListUl } from "react-icons/fa6";
import { Context } from '../Context/Context';
import Note from './Note';

const Notes = () => {
    const [grid, setGrid] = useState(true)
    const { lang, notes, value } = useContext(Context)
    const filterNotes = notes.filter(note => {
        if (value.trim() == '') {
            return note
        } else {
            return note.title.toLowerCase().includes(value.toLowerCase())
        }
    })
    if (notes.length) {
        return (
            <div className="notes">
                <div className="container">
                    <div className="notes_top">
                        <h2 className="notes_title">{lang.infobar}</h2>
                        <button className="notes_btn" onClick={() => setGrid(!grid)}>
                            {
                                grid ?
                                    <>
                                        <IoMdGrid />
                                        <span>{lang.grid}</span>
                                    </>
                                    :
                                    <>
                                        <FaListUl />
                                        <span>{lang.list}</span>
                                    </>
                            }
                        </button>
                    </div>
                    <div className={`notes_box ${grid && 'active'}`}>
                        {filterNotes.map(note => (
                            <Note key={note.id} note={note} />
                        ))}
                    </div>
                </div>
            </div>
        )
    } else return <h2 className='nonote'>{lang.nonote}</h2>

}

export default Notes