import "./Contact.css";
import { useForm, ValidationError } from '@formspree/react';



export default function Contact() {
    const [state, handleSubmit] = useForm("meqbvrpv");
  if (state.succeeded) {
      return <p>Your Message has been sent!</p>;
  }
  return (
    <div id="contact">
      <div>
          <h2 className='heading'>Get in Touch</h2>
          <hr/>
      </div>
      <div id="contact-form">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email"/>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
        autoComplete="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message"/>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        autoComplete="on"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
        </div>
    </div>
  );
}
