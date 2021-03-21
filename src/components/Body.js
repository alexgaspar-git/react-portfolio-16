import React, {useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Galerie from './Galerie'
import { Blob } from 'react-blob'

const Body = () => {
    useEffect (() => {
        console.log("changement");
        Aos.init({duration: 1500});
    }, []);

    const data = [
        {logo: <i class="fab fa-html5"></i>, titre: 'HTML', projects: '165 projects', baral1:'10%', baral2:'luck'},
        {logo: <i class="fab fa-sass"></i>, titre: 'SASS', projects: '93 projects', baral1: '20%', baral2:'skill'},
        {logo: <i class="fab fa-js-square"></i>, titre: 'JS', projects: '56 projects', baral1: '15%', baral2:'concentrated power of will'},
        {logo: <i class="fab fa-react"></i>, titre: 'React', projects: '12 projects', baral1: '5%', baral2:'pleasure'}
    ]
    const BackgroundBlob = ({style, props}) =>
    <Blob className="test" size="100vh"
    style={{
        position: 'absolute',
        top: '-15%',
        right: '-15%',
        zIndex: -1,
        color: 'white',
        opacity: 0.05,
        fontSize: '50vh',
        ...style
    }}
    {...props}
    />

    return (
        <body>
            <section className="sect1">
                <div data-aos="fade-right" id="divImgPersonne">
                    <span>ALEX GASPAR.</span>
                </div>
            </section>
            <section className='sect2' id="about">
                <h2>My Skills</h2>
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
            <section className='sect3' id='portfolio'>
                <h2>My Portfolio</h2>
                <Galerie/>
            </section>
        </body>
    )
}

export default Body