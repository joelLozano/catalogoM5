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
            <img src={props.portada} alt="" />

            <p onClick={handlerLike}>
                {heartState ?  <FaHeart className='red-icon' /> : <FaRegHeart/>}
            </p>

            <h1>{props.titulo} </h1>
            <p className='container-card-subtitle'>{props.description}</p>
            <p><strong>$ {props.price}</strong></p>
        </div>
        </>
    )
}