import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BookingService from '../Service/BookingService';
import { Paper, TextField } from '@mui/material';

import './Login1';

const AddBooking = () => {
  const navigate = useNavigate();
  const { ticket_id } = useParams();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [opponentteam, setOpponentteam] = useState('');
  const [sno, setSno] = useState('');
  const [stadium, setStadium] = useState('');
  const [mobile_no, setMobile_no] = useState('');
  const [match_no, setMatch_no] = useState('');
  const [team, setTeam] = useState('');
  const [ticketId, setTicketId] = useState('');

  const saveOrUpdateBooking = (e) => {
    e.preventDefault();

    if (
      sno.length === 0 ||
      date.length === 0 ||
      match_no.length === 0 ||
      mobile_no.length === 0 ||
      name.length === 0 ||
      opponentteam.length === 0 ||
      stadium.length === 0 ||
      team.length === 0 ||
      ticketId.length === 0
    ) {
      alert('Enter all fields');
    } else if (mobile_no.length < 10) {
      alert('Enter Correct Phone Number!');
    } else {
      if (window.confirm('Confirm Details!')) {
        const booking = {
          name,
          date,
          opponentteam,
          sno,
          stadium,
          mobile_no,
          match_no,
          team,
          ticket_id: ticketId,
        };

        if (ticket_id) {
          BookingService.updateBooking(ticket_id, booking)
            .then((response) => {
              navigate('/home');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          BookingService.createBooking(booking)
            .then((response) => {
              console.log(response.data);
              navigate('/home');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };

  useEffect(() => {
    if (ticket_id) {
      BookingService.getBookingById(ticket_id)
        .then((response) => {
          setSno(response.data.sno);
          setDate(response.data.date);
          setMatch_no(response.data.match_no);
          setMobile_no(response.data.mobile_no);
          setName(response.data.bookingName);
          setOpponentteam(response.data.opponentteam);
          setStadium(response.data.stadium);
          setTeam(response.data.team);
          setTicketId(response.data.ticket_id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ticket_id]);

  const title = () => {
    if (ticket_id) {
      return <h1>Update booking</h1>;
    } else {
      return <h1>Add booking</h1>;
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(../travel5.jpg)',
        height: '100vh',
        marginTop: '0px',
        // padding: '0px',
        // fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // opacity: '0.95',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div id="body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              {title()}
              <p>Enter booking Details</p>
            </div>
            <form>
              <Paper
                variant="outlined"
                style={{
                  width: '350px',
                  borderRadius: '20px',
                  opacity: '0.9',
                  padding: '20px',
                  margin: '0 auto',
                }}
              >
                <div className="form-group">
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Date"
                    variant="outlined"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Opponent Team"
                    variant="outlined"
                    fullWidth
                    value={opponentteam}
                    onChange={(e) => setOpponentteam(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Serial Number"
                    variant="outlined"
                    fullWidth
                    value={sno}
                    onChange={(e) => setSno(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Stadium"
                    variant="outlined"
                    fullWidth
                    value={stadium}
                    onChange={(e) => setStadium(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    value={mobile_no}
                    onChange={(e) => setMobile_no(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Match Number"
                    variant="outlined"
                    fullWidth
                    value={match_no}
                    onChange={(e) => setMatch_no(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Team"
                    variant="outlined"
                    fullWidth
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Ticket ID"
                    variant="outlined"
                    fullWidth
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    required
                  />
                </div>
                <br />
                <input
                  onClick={saveOrUpdateBooking}
                  className="e-signup-btn"
                  type="submit"
                  value="Submit"
                />
                <br /><br/>
                <Link to="/home">
                  <button className="e-cancel-btn">Cancel</button>
                </Link>
              </Paper>
            </form>
          </div>
        </div>
        </div>
      </div>
  );
};

export default AddBooking;

