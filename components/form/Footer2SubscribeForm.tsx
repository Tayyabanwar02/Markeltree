"use client";
import React, { useState } from 'react';

const Footer2SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Subscribing...');

        try {
            const res = await fetch('https://your-domain.com/backend/newsletter.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const result = await res.json();
            setStatus(result.message);
            if (result.success) {
                setEmail('');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            setStatus('Something went wrong.');
        }
    };

    return (
        <>
            <div className="te-subscribe-form-widget">
                <form onSubmit={handleSubmit}>
                    <div className="mc4wp-form-fields">
                        <div className="single-field">
                            <input 
                                type="email" 
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button className="submit-btn" type="submit">
                            {status || 'Subscribe Now'} <i className="fa fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Footer2SubscribeForm;