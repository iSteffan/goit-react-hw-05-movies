import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
`;

export const Image = styled.img`
  margin-right: 40px;
  width: 300px;
  height: auto;
`;

export const LinkBack = styled(StyledLink)`
  margin-left: 40px;
  padding: 5px 10px;
  text-decoration: none;
  color: #212121;
  border: 1px solid gray;
`;

export const List = styled.ul`
  list-style: none;
`;
