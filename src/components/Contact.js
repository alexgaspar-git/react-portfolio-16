import React, {Fragment} from 'react'

export default function Contact() {

    const contactData = [
        {icon:<i class="fas fa-map-marker-alt"></i>, titre:'Address', info:'Rue Lorem 69'},
        {icon:<i class="fas fa-envelope"></i>, titre:'Email', info:'lorem@ipsum.com'},
        {icon:<i class="fas fa-phone-volume"></i>, titre:'Phone', info:'043212345'},
        {icon:<i class="fas fa-id-card"></i>, titre:'Contact', info:'Alex Gaspar'},
    ]

    return (
        <Fragment>
            {contactData.map((el,i)=>{
                    return (                        
                        <div key={i} className="card col-3">
                            {el.icon}
                            <h2>{el.titre}</h2>
                            <h5>{el.projects}</h5>
                        </div>
                    )
                })}
        </Fragment>
    )
}
