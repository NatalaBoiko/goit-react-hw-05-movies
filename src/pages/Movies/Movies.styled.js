import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
    margin-top: 5px;
    max-width: 600px;
    display: flex;
    jastyfy-contenr: center
    max-width: 600px;;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    color: #3f51b550;
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  border: 0;
  //   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: #3f51b5;
  &:hover {
    opacity: 1;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`;

export const MovieItem = styled.li`
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const Img = styled.img`
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin: 0px;
  font-size: 10px;
  color: #3f51b5;
`;
