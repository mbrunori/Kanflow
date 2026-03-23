import { useDraggable } from '@dnd-kit/core'
import './Card.css'

function Card({ data }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: data.id })

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        zIndex: 999,
        opacity: 0.8,
    } : {}

    return (
        <div className='card' ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div className='cardTop'>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
            <span className='cardDate'>{data.date}</span>
        </div>
    )
}

export default Card