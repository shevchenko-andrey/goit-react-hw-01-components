import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  width: 300px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const AvatarWrapper = styled.div`
  display: block;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  width: 250px;
  height: 250px;
`;

export const UserData = styled.div`
  text-align: center;
`;

export const Stats = styled.ul`
  padding: 0px;
  margin: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  background-color: #bdbdbd;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  text-align: center;
  flex-wrap: wrap;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const StatsLabel = styled.span`
  font-weight: 700;
`;
