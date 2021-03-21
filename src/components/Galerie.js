import React, {Fragment} from 'react'

export default function Galerie() {

    const imgGalerie = [
        {titre:'Caminar',img:'img/caminar.png'},
        {titre:'Site Du Chef',img:'img/chef.png'},
        {titre:'Emporium',img:'img/emporium.png'},
        {titre:'Epilogue',img:'img/epilogue.png'},
        {titre:'Spatial',img:'img/spatial.jpg'},
        {titre:'Victory',img:'img/victory.png'},
    ]

    return (
        <Fragment>
                <div className="divGalerie row">
                    {imgGalerie.map((el,i)=>{
                            return (                        
                                <div key={i} className="galerie col-4">
                                    <img src={el.img} alt=""/>
                                    <span>{el.titre}</span>
                                </div>
                            )
                        })}
                </div>
        </Fragment>       
    )
}
