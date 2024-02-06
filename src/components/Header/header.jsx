import {Container} from "./style"
import { FaMoon } from "react-icons/fa";
export function Header() {
  return(
    <Container>
      <FaMoon
      size={20}
      color="black"
      className="darkmode"
      />
      <ul>
        <li>Home</li>
        <li>Stacks</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
      <p>PT|BR</p>
    </Container>
  )
} 