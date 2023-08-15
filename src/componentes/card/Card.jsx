import { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";

import './Card.css'


export default function Card(props) {
const [heartState, setHearState] = useState(false)

function handlerLike() {
    setHearState(!heartState)
}

    return (
        <>
        <div className='container-card'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/cabana-de-madera2-1642020542.jpg" alt="" />

            <p onClick={handlerLike}>
                {heartState ?  <FaHeart className='red-icon' /> : <FaRegHeart/>}
            </p>

            <h1>{props.titulo} </h1>
            <p className='container-card-subtitle'>Cuernavaca con alberca y todo chulo</p>
            <p><strong>$45,000</strong></p>
        </div>
        </>
    )
}