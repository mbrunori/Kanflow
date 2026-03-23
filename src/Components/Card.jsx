import './Card.css'

function Card({ data }) {
    return (
        <div className='card'>
            <div className='cardTop'>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
            <span className='cardDate'>{data.date}</span>
        </div>
    )
}

export default Card;