import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/scrollUp.scss';

import { useState, useEffect } from 'react';

const ScrollUp = () => {

    const [showBtnScroll, setShowBtnScroll] = useState(false);

    const handlerShowScrollUp = (props) => {
        if (window.pageYOffset > 500) {
            setShowBtnScroll(true);
        } else {
            setShowBtnScroll(false);
        }
    };

    const goToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handlerShowScrollUp);
        return () => {
          window.removeEventListener('scroll', handlerShowScrollUp);
        };
      }, []);

    return (
        <button className={showBtnScroll ? "scrollUp show" : "scrollUp hidden"} onClick={goToTop}>
            <div className="arrow-wrapper">
                <div className="arrow"></div>
            </div>
        </button>
    );
}

export default ScrollUp;