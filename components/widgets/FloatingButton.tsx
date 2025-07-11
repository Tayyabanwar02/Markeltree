"use client";
import React, { useState } from "react";
import classNames from "classnames";

const FloatingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={classNames("floatbutton", { active: isOpen })}>
      <div className="btns_wrap">
        <a href="javascript:;" className="chat_wrap chat gre-bg">
          <span className="icoo gre-bg">
            <i className="fa fa-comment"></i>
          </span>
          <span>Chat With Us</span>
        </a>
        <a href="tel:07446274802" className="call_wrap gre-bg">
          <span className="icoo gre-bg">
            <i className="fa fa-phone"></i>
          </span>
          <span>074 4627 4802</span>
        </a>
      </div>

      <div className="clickbutton gre-bg" onClick={handleToggle}>
        <div className={classNames("crossplus", { rotate: isOpen })}>
          LET’S GET STARTED
        </div>
      </div>

      <div className="banner-form">
        <h3 className="gradient-text">
          Sign Up Now &amp; <br />
          <strong>Let’s Get Started</strong>
        </h3>

        <div className="banform">
          <div className="container">
            <div className="row">
              <form
                className="cmxform leadForm"
                id="bannerform"
                method="post"
                encType="multipart/form-data"
                action="https://thedesignersagency.com/formsubmit"
              >
                <input type="hidden" name="_token" value="g9mGFGyO0YiZj9XILzIyiHkgzlhsL1zNUhCO1cZm" />
                <input type="hidden" id="formType" name="formType" />
                <input type="hidden" id="referer" name="referer" />
                <input type="hidden" name="from_" value="Ticker" />

                <div className="fldset">
                  <input id="username" name="name" type="text" placeholder="Enter your name *" required />
                </div>
                <div className="fldset">
                  <input id="cemail" type="email" name="email" placeholder="Enter email here *" required />
                </div>
                <div className="fldset">
                  <input id="phone" type="number" name="phone" placeholder="Phone Number" required />
                </div>
                <div className="fldset">
                  <textarea name="message" rows={7} placeholder="Talk About Your Project" />
                </div>
                <div className="fldset">
                  <input type="submit" name="submit" className="gre-bg" value="Connect With Us" />
                  <div id="formResult" className="popFormResult"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingForm;
