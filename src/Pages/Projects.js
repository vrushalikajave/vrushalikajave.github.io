import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="/images/orbitz_image.png"
            
              title="Orbitz.com clone"
              description="Orbitz is an online travel agency(OTA) that you can use to book flights,hotels,cars and much more ."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | LocalStorage | Git | Netlify "
              link="https://effervescent-mandazi-20a468.netlify.app/"
               a="https://github.com/imran120198/Orbitz"  
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="/images/imdb_image.png"
              title="IMDb Clone"
              description="
              IMDb (an abbreviation of Internet Movie Database) is an online database of information related to films .User can see movie related information
              like Popular, Top-rated, Upcoming Movies.
              "
              tech="Tech-Stacks"
              techD=" React.Js |  React-Router-Dom | API | Git | Vercel "
              link="https://vrk-vrushali.vercel.app/"
              a="https://github.com/vrushalikajave/imdb-clone"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
