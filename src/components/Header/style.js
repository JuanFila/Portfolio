import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 6.5vh;
  display: flex;
  background: #252526;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  color: #79C42D;
  font-weight: bold;

  h1 {
    font-family: "Inter", "Roboto";
    font-size: 26px;
    
  }

  ul {
    display: flex;
    gap: 4.5rem;
    font-size: 14px;
    text-transform: uppercase;
    
    transition: color 2s ease-in-out;  
  }

  li {
    padding: 5px 15px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s ease-in-out;
  }

  li:hover {
    border-bottom: 1px solid #79C42D;
  }
`