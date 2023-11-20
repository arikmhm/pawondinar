import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pengiriman from '../assets/img/Icon/Pengiriman.png'
import CustomerService from '../assets/img/Icon/CustomerService.png'
import Pembayaran from '../assets/img/Icon/Pembayaran.png'


const OurServiceComponent=()=> {
  return (
    <Container>
      <Row className='text-center mt-5 mb-5 '>
        <Col >
            <h2>
            Layanan Kami
            </h2>
            </Col>
      </Row>
      <Row className='text-center mb-5'>
        <Col>
        <img src={Pembayaran} ></img>
        <h3 className='mt-5 '>Pembayaran</h3>
        <p className='mt-1'>s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the </p>
        
        </Col>
        <Col>
        <img src={Pengiriman}></img>
        <h3 className='mt-5 '>Pengiriman</h3>
        <p className='mt-1'>s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the </p>
        </Col>
        <Col>
        <img src={CustomerService}></img>
        <h3 className='mt-4'>Customer Service</h3>
        <p className='mt-1'>s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the </p>
        
        </Col>
      </Row>
    </Container>
  );
}

export default OurServiceComponent;