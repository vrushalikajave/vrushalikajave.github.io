import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
function GitCalender() {
  return (
    
    <Row style={{  paddingBottom: "10px",color:"white",margin:"auto",width:"80%"}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vrushalikajave"
        blockSize={15}
        blockMargin={5}
        color="#C084F5"
        fontSize={16}
      />
    </Row>
  );
}
export default GitCalender;