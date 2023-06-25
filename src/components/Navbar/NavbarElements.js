import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
 background-color:rgba(255, 255, 255, 1);
width:100%;

  height: 50px;
  display: flex;
  justify-content: space-between;
  color:black;
  z-index: 12;
  border-radius:20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
 

  text-decoration:none;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    display: none;
  }

  a:hover{
    background-color:rgb(255, 214, 0);
    color:black;
  }
`;
  
export const NavLink = styled(Link)`
display:none
@media screen and (max-width: 768px){
  
}
color:black;

  display: flex;
  text-decoration:none;
  align-items: center;
  margin-left:5px;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer; 
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
   
    
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
   
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
 
margin-left:155px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  
 

  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
 
  margin-right: 24px;
 
  /* Third Nav */
  /* justify-content: flex-end;
  width: 200vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
 
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: black;
    color: green;
  }
`;

