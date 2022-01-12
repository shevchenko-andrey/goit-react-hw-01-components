import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  padding: 40px 0px;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  padding: 10px;
  color: #ffffff;
  :not(:last-child) {
    padding-right: 10px;
  }
  :nth-child(1) {
    background-color: #006fff;
  }
  :nth-child(2) {
    background-color: #09f80f;
  }
  :nth-child(3) {
    background-color: #00f86f;
  }
  :nth-child(4) {
    background-color: #0f0094;
  }
  :nth-child(5) {
    background-color: #ff7f94;
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
`;
