import { useDroppable } from '@dnd-kit/core'
import Card from './Card.jsx'
import './Column.css'

function Column({ data, openModal }) {
    const { setNodeRef } = useDroppable({ id: data.id })

    return (
        <div className='column'>
            <div className='topColumn'>
                <h2>{data.title}</h2>
                <button onClick={() => openModal(data.id)}>+</button>
            </div>

            <div ref={setNodeRef} className='dropZone' style={{ flex: 1, minHeight: '100px' }}>
                {data.cards.map((card) => (
                    <Card key={card.id} data={card} />
                ))}
            </div>
        </div>
    )
}

export default Column