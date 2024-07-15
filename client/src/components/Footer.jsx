import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    const styles = {
        headerStyle: {
            marginLeft: "400px"
        },

    };

    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand style={styles.headerStyle}>&#169;2024 Sole Emporium New York. All Rights Reserved</Navbar.Brand>
                </Container>
            </Navbar>
        </>

    );
};

export default Footer;

