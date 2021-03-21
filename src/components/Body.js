import React from 'react'

export default function Body() {

    const data = [
        {logo: <i class="fab fa-html5"></i>, titre: 'HTML', projects: '165 projects', baral1:'10%', baral2:'luck'},
        {logo: <i class="fab fa-sass"></i>, titre: 'SASS', projects: '93 projects', baral1: '20%', baral2:'skill'},
        {logo: <i class="fab fa-js-square"></i>, titre: 'JS', projects: '56 projects', baral1: '15%', baral2:'concentrated power of will'},
        {logo: <i class="fab fa-react"></i>, titre: 'React', projects: '12 projects', baral1: '5%', baral2:'pleasure'}
    ]
    return (
        <body>
            <section className="sect1">
                <span>ALEX GASPAR.</span>
            </section>
            <section className='sect2'>
                <div className="divCards">
                    {data.map((el,i)=>{
                            return (                        
                                <div key={i} className="card col-3">
                                    {el.logo}
                                    <h2>{el.titre}</h2>
                                    <h5>{el.projects}</h5>
                                </div>
                            )
                        })}
                </div>
            </section>
            <section className='sect3'>
            </section>
        </body>
    )
}
