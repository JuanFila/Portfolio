import styled, { keyframes } from "styled-components"

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #FBFCFF;

`

const animation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px); /* ou o valor que desejar */
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto ;
  p {
    font-size: 30px;
    color:#252526;
  }
  h2 {
    font-family: "Sixtyfour", "Roboto";
    font-size: 30px;
    color:#252526;
  };

  .imglog {
    position:  relative;
    animation: ${animation} 3s ease-in-out infinite ;
  }
  .splash{
    position:  relative;
  }
  .logo {
    position: absolute;
    left: 200px;
    top: 170px;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    z-index: 1;
  }
  
  .icons{
    position: absolute;
    bottom: 20%;
    right: 15%;
    display: flex;
    gap: 30px;
  }
  `

export const StyledGitHUb = styled.div`
  font-size: 40px;
  margin-right: 10px; 
  color: #252526; 
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  `;
export const StyledLinkdin = styled.div`
  font-size: 40px;
  margin-right: 10px; 
  color: #252526; 
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #0077b5; 
  }
  `; 
export const StyledWhatsapp = styled.div`
  font-size: 40px;
  margin-right: 10px; 
  color: #252526; 
  transition: color 0.3s ease-in-out;

  &:hover {
    color: green; 
  }
`;