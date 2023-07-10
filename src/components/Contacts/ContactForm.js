import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {

  const[ formInput, setFormInput ] = useState({
    name:'',
    email: '',
    message : ''
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_msizjpd', 'template_ugjriys', form.current, 'Eiy7JTcXcTPlo7J9Q')
    .then((res) => {
      toast.success('Message sent successfully !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",        
        });
      setFormInput({
        name:'',
        email: '',
        message : ''
      });
      console.log(res)
    }).catch((err) => {
      toast.error( err, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })

  }

  return (
    <div className={styles.contactForm}>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name :</label>
            <input type='text' name='name' placeholder='Enter your name' required value={formInput.name} onChange={(e)=>{setFormInput({...formInput, name:e.target.value})}}/>
          </div>
          <div>
            <label>Email :</label>
            <input type='email' name='email' placeholder='Enter your Email' required value={formInput.email} onChange={(e)=>{setFormInput({...formInput, email: e.target.value})}} />
          </div>
          <div>
            <label>Message :</label>
            <textarea placeholder='Type your message to me here.....' name='message' value={formInput.message} onChange={(e)=>{setFormInput({...formInput, message:e.target.value})}} />
          </div>
          <div>
            <input type='submit' value='send' />
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}

export default ContactForm