import './VisitorCounter.css'

function VisitorCounter({count, fact}){
    return(
        <div className="VisitorCounter">
            <p>Visitor count: {count}</p>
            <p>Visitor fact brought to you by NumbersAPI:</p>
            <p> {fact}</p>
        </div>
    )
}

export default VisitorCounter;