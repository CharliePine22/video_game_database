import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from './NavigationBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar className={styles.nav} bg="dark" variant="dark" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand className={styles['nav-brand']} href="/">
          <img
            src='assets/Dualshock4.png'
            width="80"
            height="30"
            className={styles['nav-logo']}
            alt=""
          />
          VG Database
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all_games">All Games</Nav.Link>
            <Nav.Link href="/search">Add Game</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
