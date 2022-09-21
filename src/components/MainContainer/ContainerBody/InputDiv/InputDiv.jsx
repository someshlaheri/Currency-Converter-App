import './InputDiv.css'

function InputDiv({amount,setamount, code}) {
    

  return (
    <div className="inDiv">
        <div className='inputDiv'>
          <input type="number" value={amount || ''} min = "1" onChange={(e)=>setamount(e.target.value)} />
        </div>
        <div className='currencyLabel'>
            <label id="currency1" >{code.base} </label>
        </div>
    </div>
  )
}

export default InputDiv