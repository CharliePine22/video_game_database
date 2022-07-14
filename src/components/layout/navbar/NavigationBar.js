import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from './NavigationBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbarImage from '../../../../public/assets/consoles.png';
import Image from 'next/image';

const NavigationBar = () => {
  return (
    <Navbar className={styles.nav} variant='dark' expand='lg' fixed='top'>
      <Container className={styles['nav-container']}>
        <Navbar.Brand className={styles['nav-brand']} href='/'>
          <Image
            src={navbarImage}
            className={styles['nav-logo']}
            alt='playstation, xbox, and steam logos'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
          <Nav>
            <Nav.Item>
              <Nav.Link className={styles.link} href='/'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styles.link} href='/search'>
                Add Game
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styles.link} href='/games_dashboard'>
                All Games
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
