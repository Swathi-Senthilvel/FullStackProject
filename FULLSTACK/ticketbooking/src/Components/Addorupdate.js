import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import AthleteService from '../service/AthleteService';
import './login.css';

const UpdatePage = () => {
  const navigate = useNavigate();
  const { athleteId } = useParams();
  const location = useLocation();

  const [athlete, setAthlete] = useState({
    chestNo: '',
    athleteName: '',
    age: '',
    gender: '',
    category: '',
    clgName: '',
    event: '',
    date: '',
  });

  const { chestNo, athleteName, age, gender, category, clgName, event, date } = athlete;

  const saveOrUpdateAthlete = (e) => {
    e.preventDefault();

    if (
      chestNo.length === 0 ||
      athleteName.length === 0 ||
      age.length === 0 ||
      gender.length === 0 ||
      category.length === 0 ||
      clgName.length === 0 ||
      event.length === 0 ||
      date.length === 0
    ) {
      alert('Enter all fields');
    } else {
      const parsedAge = parseInt(age, 10); // Convert age to an integer

      if (isNaN(parsedAge)) {
        alert('Enter a valid age!');
      } else {
        if (window.confirm('Confirm Details!')) {
          const updatedAthlete = {
            chestNo,
            athleteName,
            age: parsedAge,
            gender,
            category,
            clgName,
            event,
            date,
          };

          AthleteService.updateAthlete(athleteId, updatedAthlete)
            .then((response) => {
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
    if (location.state && location.state.athlete) {
      setAthlete(location.state.athlete);
    } else {
      // Handle the case when athlete object is not available
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAthlete((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="body">
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Update Athlete</h1>
            <p>Enter Athlete Details to Modify</p>
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                placeholder="Chest No"
                name="chestNo"
                value={chestNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Athlete Name"
                name="athleteName"
                value={athleteName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="number"
                placeholder="Age"
                name="age"
                value={age}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Gender"
                name="gender"
                value={gender}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Category"
                name="category"
                value={category}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="College Name"
                name="clgName"
                value={clgName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Event"
                name="event"
                value={event}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Event Date"
                name="date"
                value={date}
                onChange={handleInputChange}
              />
            </div>
            <div className="actions">
              <button className="signup-btn" onClick={saveOrUpdateAthlete}>
                Update
              </button>
              <Link to="/home">
                <button className="cancel-btn">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;