import { useDroppable } from '@dnd-kit/core'
import Card from './Card.jsx'
import './Column.css'

function Column({ column, openModal, removeCard }) {
    const { setNodeRef } = useDroppable({ id: column.id })

    return (
        <div className='column'>
            <div className='topColumn'>
                <h2>{column.title}</h2>
                <button onClick={() => {openModal(column.id)}}>+</button>
            </div>

            <div ref={setNodeRef} className='dropZone' style={{ flex: 1, minHeight: '100px' }}>
                {column.cards.map((card) => (
                    <Card key={card.id} data={card} column={column} removeCard={removeCard}/>
                ))}
            </div>
        </div>
    )
}

export default Column