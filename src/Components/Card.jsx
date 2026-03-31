import { useDraggable } from '@dnd-kit/core'
import './Card.css'

function Card({ data, column, removeCard }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: data.id })

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        zIndex: 999,
        opacity: 0.8,
        cursor: 'grabbing'
    } : {}

    return (
        <div className='card' ref={setNodeRef} style={style}>
            <div className='cardTop'>
                <div className='cardTopLeft'>
                    <button onClick={() => {
                        removeCard(column.id, data.id)
                    }} className='delButton'>-</button>
                    <div {...attributes} {...listeners} className='grab'>
                        ⠿
                    </div>
                </div>
                <h3>{data.title}</h3>
            </div>
            <div className='cardContent'>

                <p>{data.content}</p>
            </div>
            <span className='cardDate'>{data.date}</span>
        </div>
    )
}

export default Card