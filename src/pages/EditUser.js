import React, { Component } from 'react';
import EditLeft from '../components/Edit/EditLeft';
import EditRight from '../components/Edit/EditRight';
import '../components/styles/EditUser.css'

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
      error: null
    };
    this.state = {
      image: null,
      formData: {
        user_id: '',
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        gender_identity: "man",
        gender_interest: "woman",
        url: "",

      }
    };
  }


  handleImageChange = (event) => {
    this.setState({ image: URL.createObjectURL(event.target.files[0]) });
  };

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };
  render() {
    return (
      <>
      <div className='dashboard'>
       <EditLeft/>
       </div>
       </>
    );
  }
}

export default componentName;
