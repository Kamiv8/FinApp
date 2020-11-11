import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ReactComponent as Login } from '../assets/image/Login.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;
const StyledLogin = styled(Login)`
  width: 100%;
  height: 100%;
`;

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
