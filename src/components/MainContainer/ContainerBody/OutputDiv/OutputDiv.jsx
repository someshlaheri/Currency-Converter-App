import React from 'react'
import './OutputDiv.css'

function OutputDiv({Currency2,code}) {
  return (
    <div className="outDiv">
        <div className='outdiv'>
        <input type="text" value={Currency2 || ''} disabled/>
        </div>
        <div className="currencyLabel">
            <label id="currency2">{code.target}</label>
        </div>
        
    </div>
    
  )
}

export default OutputDiv