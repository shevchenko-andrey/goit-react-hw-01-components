import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StatisticItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
