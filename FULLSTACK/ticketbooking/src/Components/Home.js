import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookingService from '../Service/BookingService';
import { Paper, Button, Box } from '@mui/material';

import './Login1.css';

const Home = () => {
  const nav = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = () => {
    BookingService.getAllBookings()
      .then((response) => {
        setBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBooking = (sno) => {
    if (window.confirm('Sure to Delete?')) {
      BookingService.deleteBooking(sno)
        .then((response) => {
          console.log('Deletion Response:', response.data);
          getAllBookings();
        })
        .catch((error) => {
          console.log('Deletion Error:', error);
        });
    }
  };

  const deleteAllBookings = () => {
    if (window.confirm('Sure to Delete All bookings?')) {
      BookingService.deleteAllBookings()
        .then((response) => {
          getAllBookings();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const logoutHandler = () => {
    if (window.confirm('Sure to Logout?')) {
      nav('/');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(../travel7.jpg)',
        height: '100vh',
        marginTop: '0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div id="container1">
        <h1>BOOK YOUR TICKETS AT TICKETIST</h1>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <h2 style={{ color: '#FCFAE9' }}>
            <Link to="../add">
              <Button variant="contained" size="large" color="info">
                ADDBOOKING
              </Button>
            </Link>
          </h2>
          <h2 style={{ color: '#FCFAE9', marginLeft: '10px' }}>
            <Link to="../">
              <Button variant="contained" size="large" color="info">
                HOME
              </Button>
            </Link>
          </h2>
        </Box>

        <button id="viewbtn" onClick={deleteAllBookings}>
          Delete All bookings
        </button>
        <Paper
          variant="outlined"
          style={{ width: '900px', borderRadius: '70px', opacity: '0.9', padding: '65px' }}
        >
          <table id="table">
            <thead>
              <tr>
                <th>S_No</th>
                <th>Date</th>
                <th>Match_No</th>
                <th>Mobile_No</th>
                <th>Name</th>
                <th>Opponent_team</th>
                <th>Stadium</th>
                <th>Team</th>
                <th>Ticket_Id</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={`${booking.ticket_id}-${index}`}>
                  <td>{booking.sno}</td>
                  <td>{booking.date}</td>
                  <td>{booking.match_no}</td>
                  <td>{booking.mobile_no}</td>
                  <td>{booking.name}</td>
                  <td>{booking.opponentteam}</td>
                  <td>{booking.stadium}</td>
                  <td>{booking.team}</td>
                  <td>{booking.ticket_id}</td>
                  <td>
                  <Link to={`/update/${booking.ticket_id}`} state={{ booking }}>
                      <button id="actions">Update</button>
                    </Link>
                    <br />
                    <br />
                    <button id="actions" onClick={() => deleteBooking(booking.sno)}>
                      Delete!
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Paper>
        

        <button id="logout" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
