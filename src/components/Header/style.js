import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 6.5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  color: #252526;
  font-weight: bold;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-bottom-right-radius: 10%;
  border-bottom-left-radius: 10%;

  h1 {
    font-family: "Inter", "Roboto";
    font-size: 26px;
    
  }

  ul {
    display: flex;
    gap: 4.5rem;
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Sixtyfour";  
  }

  li {
  padding: 15px 15px;
  border-radius: 10%;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  color: #000; /* Adicionei uma cor inicial para a transição de cor */
  transition: color 0.4s ease-in-out, border-bottom 0.8s ease-in;
}

li:hover {
  color: #84B026;
  border-bottom: 2px solid #84B026;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`