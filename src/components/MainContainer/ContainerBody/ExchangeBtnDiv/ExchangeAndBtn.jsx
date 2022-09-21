import React from 'react'
import './ExchangeBtn.css'

function ExchangeAndBtn({Currency1,convertAmount,reset,flip,code}) {
   
  return (
    <div className="containerExcBtn">
        <div className="exchange">
            <div className='rateDiv'>
                <p id="rate">{Currency1?.rates[code.target]}</p>
            </div>
            <div className='excAndWrapDiv'>
                <div className="wrapper2">
                    <div className="divider1 div-transparent1"></div>
                </div>
                <span><p>Exchange Rate</p></span>
            </div>
        </div>
        <div className="rightHalf">
            <div className="flipMain">
                <div className="flipResetBtn">
                    <button id="flip" onClick={flip}>Flip</button>
                </div>
                <div className="flipResetBtn2">
                    <button id="reset" onClick={reset}>Reset</button>
                </div>
            </div>
            <div className="btnMain">
                <button className="btn" id="btn" onClick={convertAmount}>Convert</button>
            </div>
        </div>

    </div>
  )
}

export default ExchangeAndBtn