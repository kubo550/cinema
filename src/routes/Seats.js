import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const COLS = 6
const ROWS = 10

function Seats({order, addSeat}) {
    const cinemaSeatsArray =  Array(COLS).fill().map(x =>  Array(ROWS).fill(0))  
    
    return (
        <div className="card">
            <div className="cinema" >
            <motion.h3 initial={{transform: 'translateX(100vh)'}} animate={{transform:'translateX(0px)', fontSize:'35px'}} >  
                Krok 2: Wybierz miejsca 
            </motion.h3>
                {cinemaSeatsArray.map((row, y) => row.map((col, x) => {
                    const index = x + 1 + ROWS * y
                const divClass = order.seats.includes(index) ? 'seat active' : 'seat';
                return (
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{transform:'scale(1)', opacity:0.9}}
                    whileHover={{fontSize: '22px'}}
                    key={index} 
                    onClick={() => addSeat(index)}
                    className={divClass}
                    > {index} </motion.div>
                )}))}
                <Link to="/" > <motion.button animate={{transform:'scale(1)'}} whileHover={{scale:1.2}}> Back </motion.button> </Link>
                {order.seats.length > 0 && <Link to="/order" > <motion.button animate={{transform:'scale(1)'}} whileHover={{scale:1.2}} >Next Step</motion.button> </Link>}
            </div>
        </div>
    )
}

export default Seats
