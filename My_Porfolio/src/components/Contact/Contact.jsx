import axios from 'axios';
import React, { useState } from 'react';
import "./contact.css";

const Contact = () => {
 

  return (
    <div className="conContainer">
      <div className="contact">
        <form action=''>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
              </div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input 
                    type='text' 
                    className="app-form-control" 
                    placeholder="YOUR NAME" 
                    name='cname' 
                  />
                </div>
                <div className="app-form-group">
                  <input 
                    type='email' 
                    className="app-form-control" 
                    placeholder="EMAIL" 
                    name='cemail' 
                    
                  />
                </div>
                <div className="app-form-group">
                  <input 
                    type='text' 
                    className="app-form-control" 
                    placeholder="CONTACT NO" 
                    name='cnumber' 
                    
                  />
                </div>
                <div className="app-form-group message">
                  <textarea 
                    className="app-form-control" 
                    placeholder="MESSAGE" 
                    name="cmessage" 
                   
                  ></textarea>
                </div>
                <div className="app-form-group buttons">
                  <button 
                    className="app-form-button" 
                    type="button" 
                    
                  >
                    CANCEL
                  </button>
                  <button 
                    className="app-form-button" 
                    type="submit"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="icon-container text-white">
        
          <a href="" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}><i className="icon fa-brands fa-facebook"></i></a>
        
        
          <a href="https://www.linkedin.com/in/pooja-maddiwar/" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}><i className="icon fa-brands fa-linkedin"></i></a>
       
        
          <a href="" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}><i className="icon fa-brands fa-instagram"></i></a>
       
        
        <a href="https://github.com/PoojaMaddiwar" target='blank' style={{ textDecoration: 'none',color: 'inherit' }}><i className="icon fa-brands fa-github"></i></a>
        
      </div>
    </div>
  );
}

export default Contact;
