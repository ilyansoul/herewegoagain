import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import EditLeft from './EditLeft';

const EditProfil = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    gender_identity: 'man',
    gender_interest: 'woman',
    email: '',
    password: '',
    passwordCheck: '',
    matches: []
  });

  useEffect(() => {
    const userId = props.params.userId;
    axios
      .get(`http://localhost:3000/api/users/${userId}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => console.log(error));
  }, [props.match.params.userId]);


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = props.match.params.userId;
    axios
      .put(`http://localhost:3000/api/users/${userId}`, formData)
      .then(response => {
          console.log(response.data);
        })
        .catch(error => console.log(error));
  };


  return (
    <form onSubmit={handleSubmit} action='localhost:5000/users/:id' method='PUT'>
     
       <div className='container'>
            <h1>Inscription</h1>


            <label><b>Nom d'utulisateur</b></label>
            <br />
            <input className='text'
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
               />
            <label><b> Date de Naissance</b></label>
            <br /><br />
            <input className='text-date'
              id="dob_day"
              type="number"
              name="dob_day"
              placeholder="DD"
              value={formData.dob_day}
              onChange={handleChange}
            />

            <input className='text-date'
              id="dob_month"
              type="number"
              name="dob_month"
              placeholder="MM"
              value={formData.dob_month}
              onChange={handleChange}
            />

            <input className='text-date'
              id="dob_year"
              type="number"
              name="dob_year"
              placeholder="YYYY"
              value={formData.dob_year}
              onChange={handleChange}
            />
            <br /><br />

            

            <label><b>Email</b></label>
            <input className='text'
              type="text"
              placeholder="Enter Email"
              name="email"
              required={true}
              onChange={handleChange}
            />

            <label ><b>Mot de passe</b></label>
            <input className='password'
              type="password"
              placeholder="Enter Password"
              name="password"
              required={true}
              // onChange={handleChange} 
              />

            <label ><b>Confirmation Mot de passe</b></label>
            <input className='password'
              type="password"
              placeholder="Enter Password"
              name="passwordCheck"
              required={true}
              // onChange={handleChange} 
              />
            <br />

            <label ><b>Telephone</b></label>
            <br />

            <input className='phone'
              type="phone"
              name="tel"
              placeholder="812345678"
              required={true}
              onChange={handleChange}
            />
            <br />

          

            <div class="clearfix">

            <button type="submit" className="btn-submit">Update</button>              {/* {error && <div className="error-message">{error}</div>} */}
            </div>
          </div>
    </form>
  );
};


export default EditProfil