import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledWrapper, StyledLogin } from './StyledLoginImage';

const LoginImage = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const Coin = document.querySelector('#Coin');

    gsap.timeline().fromTo(
      Coin,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        y: '+= 200px',
        duration: 4,
        repeat: -1,
        ease: 'power4.inOut',
      },
    );
  }, []);
  return (
    <StyledWrapper ref={wrapper}>
      <StyledLogin />
    </StyledWrapper>
  );
};
export default LoginImage;
