import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    genre: '',
    contact: '',
    subject: '',
    resume: '',
    url: '',
    about: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstname">Firstname<span>*</span></label>
          <input type="text" placeholder="Enter First Name" name="firstname" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Lastname<span>*</span></label>
          <input type="text" placeholder="Enter Last Name" name="lastname" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email<span>*</span></label>
          <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact<span>*</span></label>
          <input type="number" placeholder="Enter Contact Number" name="contact" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Gender<span>*</span></label>
          <div className="form-radio-group">
            <label>
              <input type="radio" name="genre" value="female" onChange={handleChange} required /> Female
            </label>
            <label>
              <input type="radio" name="genre" value="male" onChange={handleChange} required /> Male
            </label>
            <label>
              <input type="radio" name="genre" value="other" onChange={handleChange} required /> Other
            </label>
          </div>
        </div>

        <div className="form-buttons">
          <button type="reset" className="btn-reset">Reset</button>
          <button type="submit" className="btn-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
