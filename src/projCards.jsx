import React from "react"

export const Card = ({title, descrip, image, status, link}) =>{
    return(
        <div
            className="card"
            onClick={()=> window.open(link, "_blank")}
            tabIndex={0}
            role="button"
            aria-pressed="false"
        >
            <div className="cardImg" aria-label={'Image for ${title'}>
                {image ? <img src={image} alt={title}/>:null}
            </div>
            <div className="descrip">
                <h3>{title}</h3>
                <p className={'status: ${status}'}>{status} </p>
                <p>{descriptioin}</p>
            </div>
        </div>
    )

}