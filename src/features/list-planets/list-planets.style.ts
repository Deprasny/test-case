import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; // Adjust as needed
`;

export const StyledHeader = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: auto;
  padding: 20px 30px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const TransparentButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  display: flex;
  font-size: 26px;
  justify-content: center;
  outline: none;
  transition: background 0.3s, color 0.3s;
`;

export const ButtonWishListWrapper = styled.div`
  align-items: center;
  display: flex;
`;
