import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Home({setFilm, order}) {
    const films = [
        {id: 1, name: "Szarlatan", time:"14:30", price:25},
        {id: 2, name: "Trole 2", time:"15:00", price:30},
        {id: 3, name: "Jak zostać gwiazdą", time:"17:00", price:20},
        {id: 4, name: "Skazani na Shawshank", time:"19:30", price:35},
        {id: 5, name: "Zielona mila", time:"20:30", price:12},
        {id: 6, name: "Forrest Gump", time:"22:30", price:22}
    ]

    return (
        <div className="card">
            <motion.h3 initial={{transform: 'translateX(100vh)'}} animate={{transform:'translateX(0px)', fontSize:'35px'}} >
                 Krok 1: Wybierz film
            </motion.h3>
            <motion.ul initial={{transform:'translateX(100px)', opacity:0, lineHeight:'50px'}} 
                       animate={{transform: 'translateX(0px)', opacity:1, lineHeight:'35px'}} 
                       transition={{duration:0.4}} >
                {films.map((film, i) => {

                const spanClass = order.film.name === film.name ? "active" : ''

                return (
                    <li key={i}> 
                        <motion.span whileHover={{fontSize:'28px'}}
                            onClick={() => setFilm(film)}
                            className={spanClass}>

                        {film.name}: {film.time} ({film.price}zł) 
                        </motion.span> 
                    </li>
                )})}
            </motion.ul>
                {order.film.name && <Link to="/seats" > <motion.button animate={{transform:'scale(1)'}} whileHover={{scale:1.2}} className="next">Next Step</motion.button> </Link>} 
        </div>
    )
}

export default Home
