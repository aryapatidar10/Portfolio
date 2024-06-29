// ContactForm.jsx
import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({ onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = 'template_s31hf4o'; // Replace with your EmailJS template ID
    const serviceId = 'service_tct5du9'; // Replace with your EmailJS service ID
    const userId = 'HF5GaTX1MhaSIO0rx'; // Replace with your EmailJS user ID
    const formData = new FormData(e.target);

    const data = {
      from_name: formData.get('first-name') + ' ' + formData.get('last-name'),
      from_email: formData.get('email'),
      phone_number: formData.get('phone-number'),
      choose_topic: formData.get('choose-topic'),
      message: formData.get('message'),
      terms_accepted: formData.get('checkbox') === 'on' ? 'Yes' : 'No',
    };

    emailjs.send(serviceId, templateId, data, userId)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        if (onSuccess) {
          onSuccess(); // Callback function to handle success (e.g., show success message)
        }
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Optionally, handle errors and display a message to the user
      });

    e.target.reset(); // Clear the form inputs after submission
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" name="choose-topic" required>
            <option value="">Select One...</option>
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
