import React from "react";
import "./styles.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import {BsDot} from "react-icons/bs";
const Person = ({
  first_name,
  last_name,
  avatar,
  email,
  username,
  employment,
  title, 
}) => {
  const emailLink = "mailto:".concat(`${username}`);
  const twitterLink = "http://twitter/".concat(`${username}`);
  const name = first_name + " " + last_name;
  

  return (
<>
        <img src={avatar} alt={name} className="photo" />
        <div className="box">
          <p style={{margin:0}}>{name}</p>
          <p className="job">{employment.title}</p>
          <div className="social">
            <div className="btn-email">
              <AiOutlineMail />
              <a href={emailLink} target="_blank" rel="noreferrer">
                Email
              </a>
            </div>
           <div className="separator">
           <BsDot/>
           </div>
            <div className="btn-twitter">

              <FiTwitter />
              <a href={twitterLink} target="_blank" rel="noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>
</>
  );
};

export default Person;
