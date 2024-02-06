import {
  Container,
  Section,
  StyledGitHUb,
  StyledLinkdin,
  StyledWhatsapp,
} from "./style";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import ImgProfile from "../../assets/img.png";
import Splash from "../../assets/splash.svg";
import { useState } from "react";

import Typical from "react-typical";
import { Header } from "../../components/Header/header";

export default function Home() {
  const [title, setTitle] = useState([]);
  return (
    <Container>
      <Header/>
      <Section>
        <div className="item1">
          <h2>Olá me chamo Juan</h2>
          <Typical
            steps={["Desenvolvedor front-end", 3000, "Hello world!", 4000]}
            loop={Infinity}
            color="green"
            wrapper="h2"
          />
        </div>
        <div className="imglog">
          <img className="logo" src={ImgProfile} alt="" />
          <img className="splash" src={Splash} alt="" />
        </div>
        <div className="icons">
          <StyledGitHUb>
            <FaGithub />
          </StyledGitHUb>
          <StyledLinkdin>
            <FaLinkedin />
          </StyledLinkdin>
          <StyledWhatsapp>
            <FaWhatsapp />
          </StyledWhatsapp>
        </div>
      </Section>
    </Container>
  );
}
