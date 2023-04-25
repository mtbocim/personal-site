import './VisitorCounter.css'

function VisitorCounter({count, fact}){
    return(
        <div className="VisitorCounter">
            <p>Visitor count: {count}</p>
            <p> {fact}</p>
            <p>Visitor fact brought to you by NumbersAPI:</p>
        </div>
    )
}

export default VisitorCounter;