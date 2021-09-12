import React from 'react'
import Card from '../../Card/Card'
import { cardObjOne, cardObjTwo, cardObjThree } from './Data'
import './WhoMe.css'

function WhoWe() {
    return (
        <>
            <div className="wrapper">
                <Card {...cardObjOne} />
                <Card {...cardObjTwo} />
                <Card {...cardObjThree} />

            </div>
        </>
    )
}

export default WhoWe
