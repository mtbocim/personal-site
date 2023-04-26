import './CounterDisplay.css'

function CounterDisplay({strValue}){
    const values = strValue.split('')

    return(
        <div className="CounterDisplay">
            <p><b>Visitor</b></p>
            {values.map((value, idx)=><p key={idx} className="CounterDisplay-digit">{value}</p>)}
        </div>
    )
}

export default CounterDisplay;