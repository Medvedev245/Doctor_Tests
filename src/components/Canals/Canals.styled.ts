import styled from 'styled-components';

export const CanalLisl = styled.ul`
  /* width: 250px; */
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  /* text-decoration: none; */

  //tablet
  @media screen and (max-width: 1200px) {
    font-size: var(--font-size-tablet);
    /* width: 150px; */
  }
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    /* width: 100px; */
  }
`;

export const CanalElement = styled.li`
  padding: 15px;
  text-align: center;
  width: 250px;
  min-height: 320px;
  background-color: var(--iq-underlining);
  /* background-image: url('https://lh3.googleusercontent.com/pw/AP1GczOGY-Ielx68hovanJoilVPQgOwMeN50-pCkik9j7ROO4ulU8iAlaCtyeEfAvTUpYAC0HIgeoyzIjFCtrnC-D4Ky7hYeIpbm0-LUJp3uNCpLcbr_TJwGhAvkMHZ6iTHMlo3CoDah78DLLBXSkC-7RGLU=w1921-h1082-s-no-gm?authuser=0'); */
  color: black;
  border-radius: 5px;
  padding-top: 30px;
  &:hover,
  &:focus {
    background-color: var(--iq-primary);
  }

  //tablet
  @media screen and (max-width: 1200px) {
    font-size: var(--font-size-tablet);
    /* width: 150px; */
  }
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    /* width: 100px; */
  }
`;

export const MainText = styled.h3`
  /* text-decoration: none; */
  @media screen and (max-width: 1200px) {
    font-size: var(--font-size-tablet);
    /* width: 150px; */
  }
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    /* width: 100px; */
  }
`;

export const SmallText = styled.p`
  margin-top: 20px;
  @media screen and (max-width: 1200px) {
    font-size: var(--font-size-tablet);
    /* width: 150px; */
  }
  // Mobil
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-mobile);
    /* width: 100px; */
  }
`;
