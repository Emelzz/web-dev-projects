import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Aerivia-project.png';
import projImg2 from '../assets/img/Moshify-project.png';
import projImg3 from '../assets/img/YOSA-project.png';
import projImg4 from '../assets/img/SwiftNet-project.png';
import projImg5 from '../assets/img/SharpMenu-project.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Aerivia',
      description: 'Luxury Travel Services',
      imgUrl: projImg1,
      link: 'https://elochukwuorji.github.io/Team-Codeville---Aerivia-Project/',
    },
    {
      title: 'Moshify',
      description: 'Cloud Hosting Services',
      imgUrl: projImg2,
      link: 'https://supesdeploy.netlify.app/',
    },
    {
      title: 'Sharp Menu',
      description: 'Food Ordering Services',
      imgUrl: projImg5,
      link: 'https://emelzz.github.io/Genesys-task-7/',
    },
    {
      title: 'SwiftNet',
      description: 'Cloud Hosting Services',
      imgUrl: projImg4,
      link: 'https://emelzz.github.io/Genesys-task-4/',
    },
    {
      title: 'YOSA',
      description: 'Agriculture, Food & Community',
      imgUrl: projImg3,
      link: 'https://yosarrrtest.netlify.app/',
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Over the past few years, I’ve focused on building
                    applications that solve real-world problems. This gallery
                    highlights work where I’ve taken a concept from the initial
                    schema design to a fully deployed product.
                  </p>

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='Project screenshot'
      ></img>
    </section>
  );
};
