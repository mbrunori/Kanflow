import './Column.css'
import Card from './Card'

function Column({ data }) {

    return (
        <div className='column'>
            <h1>{data.title}</h1>
            {
                data.cards.map((card, index) => (
                    <Card key={index} data={card} />
                ))
            }
        </div>
    )
}

export default Column