import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Online = styled.span`
  display: block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #00ff00;
  margin-right: 10px;
`;
export const Offline = styled.span`
  display: block;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #ff0000;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  padding-left: 10px;
`;
