import React from 'react'
import Button from '../pages/Button'
import './Card.css'

// function Card({
//     img,
//     title,
//     description
// }) {
//     return (
//         <div className="card">
//             <img src={img} className="card__img"/>
//             <div className="card__body">
//                 <h2 className="card__title">{title}</h2>
//                 <p className="card__description">{description}</p>
//                 <h3 className="card__price">46.46</h3>
//                 {/* <Button buttonSize='btn--wide' buttonColor='green'> */}
//                 <button className="card__button">
//                   Ayrıntıya Git
//                 </button>
//             </div>

//         </div>
//     )
// }

function Card({
    img,
    title,
    description
}) {
    return (
        <>
            <div className="card">
                <div className="card__img" >
                    <img src={img} />
                </div>

                <div className="card__content">
                    <div className="card__title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card__body">
                        <p>{description}</p>
                    </div>
                </div>

                <div className="card__button">
                    <button>
                        <a>
                            Daha Fazla
                    </a>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Card
