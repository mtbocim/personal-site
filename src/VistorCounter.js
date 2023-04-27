import './VisitorCounter.css'

import CounterDisplay from './CounterDisplay'

function VisitorCounter({ count, fact }) {
    let strCount = count.toString()
    let completeStrCount = '0'.repeat(8 - strCount.length) + strCount
    return (
        <div className="VisitorCounter logical">
            <CounterDisplay strValue={completeStrCount} />
            <div className='VisitorCounter-fact'>
                <p className='creative'> {fact}</p>
                <p>(Visitor fact brought to you by NumbersAPI!)</p>
            </div>
        </div>
    )
}

export default VisitorCounter;