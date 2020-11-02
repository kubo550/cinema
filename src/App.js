import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './routes/Home'
import Seats from './routes/Seats'
import Order from './routes/Order'

import './css/App.css'

function App() {
    const initialState = { 
        film: JSON.parse(localStorage.getItem('film')) || {},
        seats: JSON.parse(localStorage.getItem('seats')) || []
    }
    const [order, setOrder] = useState(initialState)

    const setFilm = newFilm => {
        localStorage.setItem('film', JSON.stringify(newFilm))
        setOrder({...order, film: newFilm})
    }

    const addSeat = seat => {
        let newSeats
        if (!order.seats.includes(seat)) {
            newSeats = [...order.seats, seat]
        }else {
            newSeats = order.seats.filter(e => e !== seat)
        }
        localStorage.setItem('seats', JSON.stringify(newSeats))
        setOrder({...order, seats: newSeats})
    }
    return (
        <Router>
            <Header />
            <div className="app">
            <Switch>
                <Route path="/" exact>
                    <Home order={order} setFilm={setFilm} />
                </Route>
                <Route path="/seats" exact>
                    <Seats order={order} addSeat={addSeat} />
                </Route>
                <Route path="/order" exact >
                    <Order order={order} />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default App