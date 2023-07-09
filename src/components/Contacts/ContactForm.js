import React, { useRef } from 'react';
import emailjs from 'email-js';
import styles from './ContactForm.module.css';

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_msizjpd', 'template_ugjriys', form.current, 'Eiy7JTcXcTPlo7J9Q')
    .then (res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <div className={styles.contactForm}>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name :</label>
            <input type='text' name='name' placeholder='Enter your name' required />
          </div>
          <div>
            <label>Email :</label>
            <input type='email' name='email' placeholder='Enter your Email' required />
          </div>
          <div>
            <label>Message :</label>
            <textarea placeholder='Type your message to me here.....' name='message'/>
          </div>
          <div>
            <input type='submit' value='send' />
          </div>
        </form>
    </div>
  )
}

export default ContactForm