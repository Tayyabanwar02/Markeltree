"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://your-domain.com/backend/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="te-comment-form">
      <div className="row gx-4">
        <div className="col-xl-12">
          <div className="te-contacts-name">
            <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="te-contacts-email">
            <input name="email" type="email" placeholder="Your Email*" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="te-contacts-name">
            <input name="phone" type="text" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="te-contacts-message">
            <textarea name="comment" cols={20} rows={3} placeholder="Write your Message here" value={formData.comment} onChange={handleChange} required></textarea>
          </div>
        </div>
        <div className="col-12 text-center">
          <button className="te-theme-btn blue-btn rounded-1" type="submit">Send a message</button>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
