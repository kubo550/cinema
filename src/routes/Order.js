import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Order({order}) {
    const liczbaBiletow = order.seats.length
    const totalPrice = order.film.price * liczbaBiletow
    return (
        <div className="card">
            <motion.h3 initial={{transform: 'translateX(100vh)'}} animate={{transform:'translateX(0px)', fontSize:'30px'}} > Podsumowanie: </motion.h3>
            <div> Bilety na film pt. "{order.film.name}" o godzinie {order.film.time} </div>
            <div> Liczba Biletów: {liczbaBiletow} </div>
            <div> Miejsca o numerach: {order.seats.sort((a, b) => a - b ).join(', ')} </div>
            <div>Do zapłaty: {totalPrice}zł </div>
            <div className="buttons">
                <Link to="/seats" > <motion.button animate={{transform:'scale(1)'}} whileHover={{scale:1.2}}>Back</motion.button> </Link>
                <motion.button animate={{transform:'scale(1)'}} whileHover={{scale:1.2}}>Płacę</motion.button>
            </div>
        </div>
    )
}

export default Order
