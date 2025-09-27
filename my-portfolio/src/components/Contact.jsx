import React from 'react';
// Import the useForm hook and ValidationError component from the Formspree library
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

const Contact = () => {
  // The useForm hook handles the form submission state.
  // Replace 'xwkzqgqg' with your actual Formspree form ID if it's different.
  const [state, handleSubmit] = useForm('xyznyvby');

  // If the form was submitted successfully, show a thank you message
  if (state.succeeded) {
      return (
          <section id="contact" className={styles.contact}>
            <div className={styles.thankYouMessage}>
              <h3>Thanks for your message!</h3>
              <p>I'll get back to you soon.</p>
            </div>
          </section>
      );
  }

  return (
      <section id="contact" className={styles.contact}>
          <div className={styles.container}>
              <h2 className={`${styles.title} gradient-text`}>Get In Touch</h2>
              <div className={styles.content}>
                  <div className={styles.formContainer}>
                      {/* Use the handleSubmit function from the hook in the onSubmit event.
                        We no longer need the 'action' or 'method' attributes.
                      */}
                      <form onSubmit={handleSubmit} action={'https://formspree.io/f/xyznyvby'} method="POST">
                          <div>
                              <label htmlFor="name">Name</label>
                              <input 
                                id="name" 
                                type="text" 
                                name="name" 
                                required 
                              />
                          </div>
                          <div>
                              <label htmlFor="email">Email</label>
                              <input
                                id="email"
                                type="email"
                                name="email"
                                required
                              />
                              {/* This component will display any email-related errors from Formspree */}
                              <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                                className={styles.errorMessage}
                              />
                          </div>
                          <div>
                              <label htmlFor="message">Message</label>
                              <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                              ></textarea>
                              {/* This component will display any message-related errors */}
                              <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                                className={styles.errorMessage}
                              />
                          </div>
                          <button type="submit" disabled={state.submitting}>
                            {state.submitting ? 'Sending...' : 'Send Message'}
                          </button>
                      </form>
                  </div>
                  <div className={styles.infoContainer}>
                      <h3>Contact Information</h3>
                      <div className={styles.infoList}>
                           <div className={styles.infoItem}>
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                              <div>
                                  <h4>Phone</h4>
                                  <p>7667093728</p>
                              </div>
                          </div>
                           <div className={styles.infoItem}>
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                              <div>
                                  <h4>Email</h4>
                                  <p>sayan18karmakar@gmail.com</p>
                              </div>
                          </div>
                           <div className={styles.infoItem}>
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                              <div>
                                  <h4>Location</h4>
                                  <p>India</p>
                              </div>
                          </div>
                      </div>
                      <div className={styles.socials}>
                          <h4>Follow Me</h4>
                           <div className={styles.socialLinks}>
                               <a href="https://www.linkedin.com/in/sayan-karmakar-b82302234/" target="_blank" rel="noopener noreferrer">
                                   <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                               </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Contact;