import { Container, Row, Col } from 'react-bootstrap';
// import { MailchimpForm } from './MailchimpForm';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/chukwuemelie-nnadozie/'>
                <img src={navIcon1} alt='Icon' />
              </a>
              <a
                href='https://github.com/Emelzz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub size={25} />
              </a>
              <a href='https://instagram.com/mj_emelz'>
                <img src={navIcon3} alt='Icon' />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
