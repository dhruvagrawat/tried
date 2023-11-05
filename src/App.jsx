import { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [hospital, setHospital] = useState('');
  const [weekday, setWeekday] = useState(new Date());

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };

  const handleWeekdayChange = (date) => {
    setWeekday(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="header-wrapper">
  <header>
    <nav>
      <div className="nav-content">
        <div className="logo">
          <a href="#">
            <img
              className="logo"
              src="src\assets\tin.png"
              alt=""
            />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#appointment">Appointment</a>
          </li>
          <li>
            <a href="#available">Available slots</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <div class="profile">
              <a href='#'><i class="fa-solid fa-user fa-lg"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</div>

      <div className="home-wrapper">
        <section className="home">
          <div className="firstsection">
            <div className="leftsection">
              <h1 className="welcome">Welcome to TinDr!</h1>
              <h5 className="tagline">Most convenient platform to book hospital appointements</h5>
              <div className="lognsign">
                <button className="login">log in</button>
                <a className="signup" href="#">
                  <u>sign up</u>
                </a>
              </div>
            </div>
            <div className="rightsection">
              <h1 class="bigtext">Tired of booking long Queues</h1>
              <h6 class="smalltext">Book an appointment </h6>
              {/* content */}
            </div>
          </div>
        </section>
      </div>
      <div className="text">
        <h2 id="about">About Us</h2>
        <div className="bottom">
          <div>
            <table border="0">
              <tr>
                <td width="700px">
                  <span style={{ color: '#000' }}> Welcome to <mark>TinDr</mark> </span> <br />
                  <br />
                  <span style={{ color: '#000', fontSize: '16px' }}> Best hospital appointments booking site </span> <br />
                  <br />
                  Our platform is designed for seamless healthcare scheduling. Users can easily book appointments with top doctors in various hospitals. With a user-friendly interface, scheduling is convenient and straightforward. Our focus is on prioritizing your well-being and time efficiency. <br />
                  <br />
                  <br />
                  <br />
                </td>
                <td style={{ paddingLeft: '11em' }}> <img src='src\assets\about.jpg' width="400px" alt="about" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="text">
        <h2 id="appointment">Book an appointment</h2>
        <p>Booking an appointment has never been easier</p>
        <button onClick={handleFormToggle} className="FAQ__title">
          Book Now <i className={`fal fa-plus ${isFormOpen ? 'fa-rotate-45' : 'fa-2x'}`}></i>
        </button>
        {isFormOpen && (
          <form onSubmit={handleSubmit} className="mini-form">
            <label>Location:</label>
            <select className ="smolclass" value={location} onChange={handleLocationChange}>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
              <option value="UP">UP</option>
            </select>
            <br />
            <label>Hospital Name:</label>
            <select className ="smolclass" value={hospital} onChange={handleHospitalChange}>
              <option value="Hospital 1">Hospital 1</option>
              <option value="Hospital 2">Hospital 2</option>
              <option value="Hospital 3">Hospital 3</option>
            </select>
            <br />
            <label>Weekday:</label>
            <DatePicker selected={weekday} onChange={handleWeekdayChange} dateFormat="MMMM d, yyyy" />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div className="text">
  <h2 id="available">Available Slots</h2>
  <p>Find available slots available nearest to you</p>
  <table className="slot-table">
    <thead>
      <tr>
        <th>Hospital Name</th>
        <th>Available Slots</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hospital A</td>
        <td>10 slots</td>
      </tr>
      <tr>
        <td>Hospital B</td>
        <td>5 slots</td>
      </tr>
      <tr>
        <td>Hospital C</td>
        <td>8 slots</td>
      </tr>
    </tbody>
  </table>
</div>



      <div className='text'>
      <h2 id="contact">Contact Us</h2>
      <div class="contact-form">
  <form onSubmit={handleSubmit} className="mini-form">
    <div className="form-row">
      <div className="form-col">
        <label>First Name:</label>
        <input className ="smolclass2" type="text" placeholder="Enter your First Name" /> 
      </div>
      <div className="form-col">
        <label>Last Name:</label>
        <input className ="smolclass2" type="text" placeholder="Enter your Last Name" />
      </div>
    </div>
    <div className="form-row">
      <label>Email:</label>
      <input className ="smolclass"  type="email" placeholder="Enter your Email"/>
    </div>
    <div className="form-row">
      <label>Phone:</label>
      <input className ="smolclass"  type="tel" placeholder="Enter your Contact Number"/>
    </div>
    <div className="form-row">
      <label>Message:</label>
      <textarea className="smolclass1" placeholder="Enter your message" ></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
  </div>
</div>

    <footer className="footer">
      <p>© 2023 TinDr. All rights reserved.</p>
    </footer>
  </div>
);
}

export default App;
