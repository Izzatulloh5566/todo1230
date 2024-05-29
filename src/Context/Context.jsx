import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext()

import { uz, ru } from '../lang';
const ContextProvider = ({ children }) => {
    const [notes, setNotes] = useState(getNotes)
    const [flag, setFlag] = useState(true)
    const [lang, setLang] = useState(uz)
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [update, setUpdate] = useState({ note: {}, edit: false })
    const [value, setValue] = useState("")

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    function getNotes() {
        let notes = localStorage.getItem("notes")
        if (notes) {
            return JSON.parse(notes)
        } else {
            return []
        }
    }

    const changeLang = (til) => {
        til == 'uz' ? setLang(ru) : setLang(uz)
        setFlag(!flag)
    }
    const delNote = (id) => {
        setNotes(notes.filter(note => note.id != id))
    }
    const changeNote = (note) => {
        setModal(true)
        setTitle(note.title)
        setText(note.text)
        setUpdate({ note: note, edit: true })
    }
    return (
        <Context.Provider value={{ value, setValue, setUpdate, update, changeNote, delNote, notes, setNotes, flag, lang, changeLang, notes, modal, setModal, title, text, setTitle, setText }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider