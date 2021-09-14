import React from 'react'
import './pricecoin.css'
const pricecoin = ({type,price}) => {
    const border ={
        low:'8px solid crimson',
        high:'8px solid green',
        current:'8px solid yellow'
    }
    const textColor ={
        low:'crimson',
        high:'green',
        current:'yellow'
    }
    const textDollar ={
        low:'white',
        high:'white',
        current:'white'
    }

    return (
        <div className="pricecoin-wrap"  style={{ borderBottom: border[type] }}>
            <h4 className="price-type" style={{color:textColor[type]}}>{type}</h4>
            <h1 className="price" style={{color:textDollar[type]}}>$ {price}</h1>
        </div>
    )
}

export default pricecoin
