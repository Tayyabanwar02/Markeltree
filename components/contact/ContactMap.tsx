import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="contact-map-area">
        <div className="te-map-widget">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.818786353317!2d-86.79667542501093!3d36.14662530427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646690513300a7%3A0xf9109cc8faf25cf4!2s1005%2017th%20Ave%20S%2C%20Nashville%2C%20TN%2037212%2C%20USA!5e0!3m2!1sen!2s!4v1751556843586!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
