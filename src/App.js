import './App.css';
import {Navbar, Nav, Carousel, Button, Form, FormControl} from 'react-bootstrap';
import  homePageFirst from '../src/images/home-page-1.jpg';
import  homePageMiddle from '../src/images/home-page-2.jpg';
import  homePageLast from '../src/images/home-page-3.jpg';

function App() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">LAS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Legal Advice</Nav.Link>
                        <Nav.Link href="#accounts">Find a Lawyer</Nav.Link>
                        <Nav.Link href="#transactions">Account</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <FormControl type="text" placeholder="Search Lawyers" className="mr-2" />
                </Form>

                <Button variant="primary" className="ml-2">Sign Up</Button>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homePageFirst}
                        alt="First slide"
                        style={{ maxHeight: '750px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Welcome to our Legal Assistance Service Platform</h3>
                        <p>Manage your legal advice with ease.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homePageMiddle}
                        alt="Second slide"
                        style={{ maxHeight: '750px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Secure and Convenient</h3>
                        <p>Your data security is our priority.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homePageLast}
                        alt="Third slide"
                        style={{ maxHeight: '750px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>24/7 Access</h3>
                        <p>LAS services available anytime, anywhere.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container mt-4">
                <h2>About Our Services</h2>
                <p>
                    INSTALEX is an organized team of experienced lawyers in different branches of
                    law practicing in Supreme Court of India and different High Courts.
                </p>
                <p>
                    Our firm is supported by a pool of trained paralegal staffs who are apt
                    in drafting instruments, deeds, codicils, attend court works & field works
                    sincerely with the expectations of clients and provide quality and affordable
                    discharge of services to all in need of legal back up being in personal, business,
                    mining or entangled in property disputes.
                </p>
            </div>
            <section className="features">
                <div className="feature">
                    <i className="fas fa-gavel"></i>
                    <h2>Find a Lawyer</h2>
                    <p>Connect with experienced lawyers in your area.</p>
                </div>

                <div className="feature">
                    <i className="fas fa-balance-scale"></i>
                    <h2>Legal Services</h2>
                    <p>Explore a wide range of legal services.</p>
                </div>

                <div className="feature">
                    <i className="fas fa-newspaper"></i>
                    <h2>Legal Blog</h2>
                    <p>Stay updated with our legal articles and insights.</p>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2023 Legal Assistance Service Hub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
