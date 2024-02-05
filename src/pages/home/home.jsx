import { Container, Section, StyledGitHUb, StyledLinkdin, StyledWhatsapp } from "./style";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import ImgProfile from "../../assets/img.png";
import Splash from "../../assets/splash.svg";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState([])
  return (
    <Container>
      <Section>
        <div>
        <h2>Olá me chamo Juan</h2>
        <h2>Sou desenvolvedor front-end</h2>
        </div>
        <div className="imglog">
          <img className="logo" src={ImgProfile} alt="" />
          <img className="splash" src={Splash} alt="" />
        </div>
        <div className="icons">
        <StyledGitHUb>
            <FaGithub/>
        </StyledGitHUb>
        <StyledLinkdin>
            <FaLinkedin/>
        </StyledLinkdin>
        <StyledWhatsapp>
            <FaWhatsapp/>
        </StyledWhatsapp>
            </div>
      </Section>
    </Container>
  );
}
