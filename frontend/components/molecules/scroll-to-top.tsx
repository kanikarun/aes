'use client';

import { ArrowUp01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener('scroll', function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener('scroll', function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <button type="button" className={`scroll-to-top ${stick ? 'show' : ''}`} onClick={onClickHandler}>
      <HugeiconsIcon icon={ArrowUp01Icon} aria-hidden="true" className="m-auto h-6 w-auto text-white lg:h-7" />
    </button>
  );
};

export default ScrollToTop;
