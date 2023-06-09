import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import BookingService from '../Service/BookingService';
import './Login1.css';
const UpdatePage = () => {
  const navigate = useNavigate();
  const { athleteId } = useParams();
  const location = useLocation();

  const [booking, setBooking] = useState({
    ticket_id: '',
    name: '',
    date: '',
    opponentteam: '',
    sno: '',
    stadium: '',
    mobile_no: '',
    match_no: '',
    team: ''
  });

  const { ticket_id, name, date, opponentteam, sno, stadium, mobile_no, match_no, team } = booking;

  const saveOrUpdateBooking = (e) => {
    e.preventDefault();

    if (
      ticket_id.length === 0 ||
      name.length === 0 ||
      opponentteam.length === 0 ||
      sno.length === 0 ||
      stadium.length === 0 ||
      mobile_no.length === 0 ||
      match_no.length === 0 ||
      date.length === 0 ||
      team.length === 0
    ) {
      alert('Enter all fields');
    } else {
      if (window.confirm('Confirm Details!')) {
        const updatedBooking = {
          ticket_id,
          name,
          date,
          opponentteam,
          sno,
          stadium,
          mobile_no,
          match_no,
          team
        };

        BookingService.updateBooking(athleteId, updatedBooking)
          .then((response) => {
            navigate('/home');
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  useEffect(() => {
    if (location.state && location.state.booking) {
      setBooking(location.state.booking);
    } else {
      // Handle the case when athlete object is not available
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div
      style={{
        backgroundImage: 'url(../travel3.jpg)',
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
              <h1>Update Booking</h1>
              <p>Enter Booking Details to Modify</p>
            </div>
            <form>
              <div className="input">
                <input
                  type="text"
                  placeholder="Ticket Id"
                  name="ticket_id"
                  value={ticket_id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="number"
                  placeholder="Sno"
                  name="sno"
                  value={sno}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="OpponentTeam"
                  name="opponentteam"
                  value={opponentteam}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Team"
                  name="team"
                  value={team}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Match_No"
                  name="match_no"
                  value={match_no}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Mobile_No"
                  name="mobile_no"
                  value={mobile_no}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Stadium"
                  name="stadium"
                  value={stadium}
                  onChange={handleInputChange}
                />
              </div>
              <div className="actions">
                <button className="signup-btn" onClick={saveOrUpdateBooking}>
                  Update
                </button>
                <br/><br/>
                <Link to="/home">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
