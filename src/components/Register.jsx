import React, { useState } from 'react';
import './styles/register.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Register = () => {
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
    about: '',
    matches: []
  });
  const [error, setError] = useState(null);
  const [cookies, setCookies, removeCookies] = useState(['user'])


 

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };



    return (
      <div className='back'>
        <form action='http://localhost:5000/api/signup' method='POST' >
          <div className='container'>
            <h1>Inscription</h1>


            <label><b>Nom d'utulisateur</b></label>
            <br />
            <input className='text'
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}

              onChange={handleChange} />
            <label><b> Date de Naissance</b></label>
            <br /><br />
            <input className='text-date'
              id="dob_day"
              type="number"
              name="dob_day"
              placeholder="DD"
              // value={formData.dob_day}
              onChange={handleChange}
            />

            <input className='text-date'
              id="dob_month"
              type="number"
              name="dob_month"
              placeholder="MM"
              // value={formData.dob_month}
              onChange={handleChange}
            />

            <input className='text-date'
              id="dob_year"
              type="number"
              name="dob_year"
              placeholder="YYYY"
              // value={formData.dob_year}
              onChange={handleChange}
            />
            <br /><br />
            <div className='posi'>
              <label >Gender</label>
              <label >Gender Interest</label>
            </div>


            <div className="multiple-input-container">

              <select
                name="gender_identity" >

                <optgroup>
                  <option
                    checked={formData.gender_identity === "man"}
                    onChange={handleChange}
                  >
                    Homme

                  </option>
                  <option
                    checked={formData.gender_identity === "woman"}
                  >
                    femme
                  </option>
                </optgroup>

              </select>


              <select name="gender_interest">
                <optgroup >
                  <option
                    checked={formData.gender_interest === "man"}

                  >
                    Homme

                  </option>
                  <option
                    checked={formData.gender_interest === "woman"}
                  >                    Femme
                  </option>

                </optgroup>

              </select>

            </div>

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
              onChange={handleChange} />

            <label ><b>Confirmation Mot de passe</b></label>
            <input className='password'
              type="password"
              placeholder="Enter Password"
              name="password-check"
              required={true}
              onChange={handleChange} />
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

              <button type="submit" className="btn-submit">Sign Up</button>
              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </form>
      </div>


    );

  }






export default Register