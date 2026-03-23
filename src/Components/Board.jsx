import { act, useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import './Board.css'
import Column from './Column.jsx'

const initialData = [
    {
        id: 1, title: "To Do", cards: [
            { id: 1, title: "Studia React", content: "Finire il tutorial", date: "2024-03-01" },
            { id: 2, title: "Sparati", content: "Descrizione task", date: "2024-03-02" },
        ]
    },
    {
        id: 2, title: "Doing", cards: [
            { id: 3, title: "Kanflow", content: "Lavorare al progetto", date: "2024-03-03" },
        ]
    },
    {
        id: 3, title: "Done", cards: [
            { id: 4, title: "Setup", content: "Progetto creato", date: "2024-03-04" },
        ]
    },
]


function Board() {

    const [columns, setColumns] = useState(initialData)

    function handleDragEnd(event) {
        const { active, over } = event
        if (!over) return

        const cardId = active.id
        const targetColumnId = over.id

        setColumns(prev => {
            const sourceCol = prev.find(col => col.cards.some(card => card.id === cardId))
            if (!sourceCol || sourceCol.id === targetColumnId) return prev

            const card = sourceCol.cards.find(card => card.id === cardId)

            return prev.map(col => {
                if (col.id === sourceCol.id) {
                    return { ...col, cards: col.cards.filter(c => c.id !== cardId) }
                }
                if (col.id === targetColumnId) {
                    return { ...col, cards: [...col.cards, card] }
                }
                return col
            })
        })
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className='container'>
                {columns.map(col => (
                    <Column key={col.id} data={col} />
                ))}
            </div>
        </DndContext>
    )
}

export default Board