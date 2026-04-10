import React, { useState } from "react";
import "./Contact.css"; // Ensure you import the CSS file

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch (error) {
      setStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">

        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            We'd love to hear from you. Have questions or need assistance with your orders? Reach out to us directly!
          </p>

          <div className="info-item">
            <span className="icon">📍</span>
            <div className="info-text">
              <h4>Location</h4>
              <p>123 Literary Lane, Book City, BC 45678</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <div className="info-text">
              <h4>Email Us</h4>
              <p>support@bookstore.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div className="info-text">
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-wrapper">
          <h3>Send us a Message</h3>

          {status === "success" && (
            <div className="alert-success">
              ✅ Thank you! Your message has been sent successfully. We will get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="alert-error">
              ❌ Oops! Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
