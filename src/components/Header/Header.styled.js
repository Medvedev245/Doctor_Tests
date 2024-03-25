import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--iq-primary);
  height: 60px;
  padding-top: 15px;
  display: flex;
  /* flex-direction: ; */
  align-items: center;
  padding: 0 40px 0 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  /* display: flex; */
`;

export const Text = styled.p`
  /* margin-bottom: 15px; */
  font-size: 24px;
  font-weight: 500;
`;

export const ContainerData = styled.nav`
  /* width: 200px; */
  display: flex;
  justify-content: space-between;
`;
