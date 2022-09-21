import React, { useEffect, useState } from 'react'
import ExchangeAndBtn from './ExchangeBtnDiv/ExchangeAndBtn'
import InputDiv from './InputDiv/InputDiv'
import OutputDiv from './OutputDiv/OutputDiv'
import './ContainerBody.css'
import { ConvertAPI, ShowRateAPI } from '../../../api/ApiCall'

function ChildContainer() {
        const [amount, setamount] = useState(1)
        const [Currency2, setCurrency2] = useState('')
        const [Currency1, setCurrency1] = useState(null)
        const [code, setCode] = useState({base:'INR',target:'EUR'})
        
        useEffect(() => {
            convertAmount(() =>{
                let result = ConvertAPI(code.base, code.target,amount)
                setCurrency2(result)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        useEffect(() => {
          let BaseRate = async()=>{
            let response = await ShowRateAPI(code.base)
            setCurrency1(response)
          }
          BaseRate()
        },[code])
        

        // convert courrency
        let convertAmount = async()=>{
            // eslint-disable-next-line eqeqeq
            if(!amount || amount == 0){
                alert("Wrong input! Please enter number greater than 0.")
                return
            }
            let result = await ConvertAPI(code.base, code.target,amount )
            setCurrency2(result)
        }   

        // flip code

        let flip = ()=>{
            setCode({...code,base:code.target,target:code.base})
            setCurrency2(amount)
            setamount(Currency2)

        }

        // reset input

        let reset = () =>{
            setamount('1')
            setCurrency2(Currency1.rates[code.target])
            console.log("amount",amount)

           
        }
        
    return ( 
        <>
            <div className = 'childContainer' >
                <InputDiv Currency1={Currency1} setamount={setamount} amount={amount} code={code} />
                <ExchangeAndBtn Currency1={Currency1} convertAmount={convertAmount} reset={reset} flip={flip} code={code} />
                <OutputDiv Currency1={Currency1} Currency2={Currency2} code={code} />
            </div> 
        </>
    )
}

export default ChildContainer