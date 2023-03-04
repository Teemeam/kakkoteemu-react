import React, { useRef, useState } from 'react';

/* ------ Styles ------ */
import * as s from './index.styled';

const Feedback = (props) => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false); // True if form is submitted

  // Form specs
  const form_url = 'https://docs.google.com/forms/d/1Yalep7Du8fShmTXMhFSwp8Mj1VWCpy6Y6rXm5Wu7fDI/formResponse';
  const input_entry = 'entry.1456031971';

  // Submit form function
  function submitForm(e) {
    e.preventDefault();
    if (form.current) {
      form.current.submit();
      setFormSubmitted(true);
    }
  }

  return (
    <s.Container style={{ background: 'linear-gradient(rgb(0, 30, 30), ' + props.bgColor + ')' }}>
      <form ref={form} action={form_url} method='post' target='hidden-iframe' style={{ display: formSubmitted ? 'none' : 'block' }}>
        <input type='text' name={input_entry} placeholder='Send me a message!'></input>
        <button type='submit' onClick={(e) => submitForm(e)}>
          {formSubmitted ? 'Sent' : 'Send'}
        </button>
      </form>
      <p className='thank-you' style={{ display: formSubmitted ? 'block' : 'none' }}>
        Thank you!
      </p>
      <iframe title='hidden-iframe' name='hidden-iframe' style={{ display: 'none' }}></iframe>
    </s.Container>
  );
};

export default Feedback;
