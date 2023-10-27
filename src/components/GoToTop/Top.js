import './Top.css'
import { useState,useEffect } from 'react';
import React from 'react'


const Top = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollToTop = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
        window.addEventListener("scroll", scrollToTop);
        return () => window.removeEventListener("scroll", scrollToTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };

  return (
    <>
    {visible && (
    <div className='top-btn'>
        <button className="Btn" onClick={scrollToTop}>
          <svg height="1.5em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
          <p className="text">Back to Top</p>
        </button>
    </div>
    )}
    </>
  )
}

export default Top;
