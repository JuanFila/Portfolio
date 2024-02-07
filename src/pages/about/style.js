import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #FBFCFF;

`


export const Section = styled.section`
  width: 100%;
  height: 100vh;

  p {
    font-size: 30px;
    color:#252526;
  }
  h2 {
    font-family: "Inter", "Roboto";
    font-size: 180px;
  }
  .item1 {
    // equanto escrollar a tela ele vai indo para a direita
    position: absolute;
    left: 15%;
    top: 1200px;
    color: rgb(238, 238, 238);
    text-transform: uppercase;
  }
  `;