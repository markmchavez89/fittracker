import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Home.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AirlineSeatLegroomExtraIcon from '@mui/icons-material/AirlineSeatLegroomExtra';
import AddIcon from '@mui/icons-material/Add';
import RestaurantIcon from '@mui/icons-material/Restaurant';


function Home() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    return (
        <div className="container">
            {/* <Calendar onChange={onChange} value={date} /> */}
            <h1 className="fittracker">Welcome to FitTracker<FitnessCenterIcon fontSize="large" className="fitness-icon" /></h1>
            <p>Choose a sample workout or create your own and save your results!</p>
            <Link to ="/create-a-workout" className="link">
            <button className="button"><span className="button-text">Create A Workout</span><span className="button-icon"><AddIcon /></span></button>
            </Link>
            <Link to ="/push-day" className="link">
            <button className="button"><span className="button-text">Push Day</span><span className="button-icon"><ArrowForwardIcon /></span></button>
            </Link>
            <Link to ="/pull-day" className="link">
            <button className="button"><span className="button-text">Pull Day</span><span className="button-icon"><ArrowBackIcon /></span></button>
            </Link>
            <Link to ="/leg-day" className="link">
            <button className="button"><span className="button-text">Leg Day</span><span className="button-icon"><AirlineSeatLegroomExtraIcon /></span></button>
            </Link>
            <Link to ="/nutrition" className="link">
            <button className="button"><span className="button-text">Nutrition</span><span className="button-icon"><RestaurantIcon /></span></button>
            </Link>
        </div>

    );    
}

export default Home;