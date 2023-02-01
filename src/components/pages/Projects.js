import Message from "../layout/Message";
import { useLocation } from "react-router";
import Container from "../layout/Container";
import styles from "./Projects.module.css";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>    

      {message && <Message msg={message} type="sucess" />}

      <Container customClass="start">
        <p>Projetos</p>
      </Container>
    </div>
  );
}

export default Projects;
