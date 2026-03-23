import './Board.css'
import Column from './Column.jsx'

const initialData = [
    { id: 1, title: "To Do", cards: [
        { id: 1, title: "Studia React", content: "Finire il tutorial", date: "2024-03-01" },
        { id: 2, title: "Sparati", content: "Descrizione task", date: "2024-03-02" },
    ]},
    { id: 2, title: "Doing", cards: [
        { id: 3, title: "Kanflow", content: "Lavorare al progetto", date: "2024-03-03" },
    ]},
    { id: 3, title: "Done", cards: [
        { id: 4, title: "Setup", content: "Progetto creato", date: "2024-03-04" },
    ]},
]


function Board() {

    return (
        <div className='container'>
            {initialData.map(col => (
                <Column key={col.id} data={col}/>
            ))}
        </div>
    )
}

export default Board