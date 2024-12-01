import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/img/project1.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/img/project2.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/img/project3.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/img/project4.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/img/project5.png",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/img/project6.png",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A modern, user-friendly e-commerce platform designed to
                    enhance the online shopping experience. It features secure
                    payment integration, product categorization, and a
                    responsive layout, ensuring smooth browsing on all devices.A
                    sleek and interactive portfolio website showcasing my work
                    and skills. It includes smooth scroll animations, a project
                    gallery, an about section, and a contact form, providing an
                    engaging experience for visitors.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        src="/img/color-sharp2.png"
        className="background-image-right"
        alt="img"
      />
    </section>
  );
};

export default Projects;
