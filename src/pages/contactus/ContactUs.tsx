import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './contactus.css';

const ContactUs : React.FC = ({}) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const naviagte = useNavigate();

  return (
  <div className="contact-container">
      <h2>Contact us!</h2>
      <form className="contact-form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="contact-description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" onClick={() => naviagte("/")}>Submit request</button>
      </form>
    </div>)
}

export default ContactUs;