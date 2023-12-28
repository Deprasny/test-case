import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  list-style-type: none;
  margin: 8px 0;
`;

export const Title = styled.h3`
  color: green;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  text-decoration: underline;
`;

export const Subtitle = styled.p`
  color: #666;
  margin-bottom: 8px;
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
