import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from './NavigationBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className={styles['nav-brand']} href="/">
          <img
            src="assets/consoles.png"
            width="150"
            height="30"
            className={styles['nav-logo']}
            alt=""
          />
          VG Database
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link className={styles.link} href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styles.link} href="/search">Add Game</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styles.link} href="/all_games">All Games</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
