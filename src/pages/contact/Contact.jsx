import React, { useState, useRef } from 'react'
import { BsExclamationLg, BsPatchCheckFill } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'

import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal'


// Email js
import emailjs from '@emailjs/browser'
import './contact.scss'

const Contact = React.memo(() => {
  const [validInpt, setValidInpt] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidInpt((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const emailRef = useRef(null);
  const TextAreaRef = useRef(null);
  const MessageRef = useRef(null);
  const form = useRef(null);

  const showMessage = (message, updateColor) => {
    if (message === "Ooops! Email not valid" && !validInpt.email) {
      return; // Do not show the error message for invalid email if email field is empty
    }

    const divContent = document.createElement('div');
    divContent.textContent = message;
    divContent.classList.add('div-content');
    MessageRef.current.prepend(divContent);
    divContent.style.backgroundColor = updateColor;

    MessageRef.current.style.transform = `translateX(${'0'}%)`;
    MessageRef.current.style.visibility = 'visible';
    setTimeout(() => {
      divContent.classList.add('hide');
      divContent.addEventListener('transitionend', () => {
        divContent.remove();
      });
      divContent.style.transform = `translateX(${'0'}%)`;
      emailRef.current.parentElement.classList.remove('error');
      TextAreaRef.current.parentElement.classList.remove('error');
      emailRef.current.parentElement.classList.remove('success');
      TextAreaRef.current.parentElement.classList.remove('success');
      
    }, 5000);
  };

  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains('success')) {
      inputRef.current.parentElement.classList.remove('success');
    } else {
      inputRef.current.parentElement.classList.add('error');
    }
  };

  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains('error')) {
      inputRef.current.parentElement.classList.remove('error');
    } else {
      inputRef.current.parentElement.classList.add('success');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, message } = validInpt;
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!email && !message) {
      setError(emailRef);
      setError(TextAreaRef);
      showMessage('Pls! fill in the required inputs');
    } else if (!email && message) {
      setError(emailRef);
      showMessage("Ooops! Email can't be empty");
    } else if (!email.match(pattern)) {
      setError(emailRef);
      showMessage('Ooops! Email not valid');
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef);
      showMessage('Leave a message pls!');
    } else if (email && !message) {
      setError(TextAreaRef);
      showMessage('por favor! enviar un mensaje');
    } else if (email && message) {
      emailjs.sendForm(
        'fake',
        'fake',
        form.current,
        'feke',
      );
      setSuccess(emailRef);
      setSuccess(TextAreaRef);
      showMessage('Message sent successfully', 'green');

      setValidInpt({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  const year = new Date().getFullYear()

  return (
    <>
      <section className="contact-section">
        <div className="fake-big">@</div>
        <form ref={form} className="contact-form" onSubmit={onSubmit}>
          <div>
            <h2 aria-label="contact me" className="contact__heading">
              Contact me
            </h2>
            <Fade bottom>
              <p>
                I'm interested in freelance opportunities and always ready for new projects.
                If you have a job offer, please use the form below to contact me.
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="input-wrapper">
              <div className="form-input-group">
                <input
                  autoComplete="false"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={validInpt.name}
                  onChange={handleChange}
                />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>

              <div className="form-input-group">
                <input
                  autoComplete="false"
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={validInpt.email}
                  onChange={handleChange}
                />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
              <input
                autoComplete="false"
                type="text"
                placeholder="Subject"
                name="subject"
                value={validInpt.subject}
                onChange={handleChange}
              />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
              <textarea
                autoComplete="false"
                ref={TextAreaRef}
                type="text"
                placeholder="Message"
                name="message"
                value={validInpt.message }
                onChange={handleChange}
              />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade left>
            <button type="submit" className="contact-button submit-button">
              <div>
                <span className="bg switch__bg"></span>
                <span className="base switch__border-color"></span>
                <span className="text">
                  Send Message
                  <RiSendPlane2Fill className="message-deliver" />
                </span>
              </div>
            </button>
          </Fade>
          <Reveal bottom>
            <footer className="footer">
              <p>&copy;{year} Massi, All Rights Reserved.</p>
            </footer>
          </Reveal>
        </form>

        <div ref={MessageRef} className="message"></div>
      </section>
    </>
  );
});

  
  
  

export default Contact
