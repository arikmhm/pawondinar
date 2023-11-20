import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product1 from '../assets/img/Product/Product1.png';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import BackgroundYellow from '../assets/img/bg/bgYellow.png'
import wal from '../assets/img/Icon/Whatsapp.png'
const Product=()=>{

    return(
    <div style={{backgroundColor:'#FFCD01', minHeight:'30em', borderTopLeftRadius:'30px',borderBottomLeftRadius:'30px',marginLeft:'80px',marginTop:'20px'}}>

    <Container >
      <Row>
        <Col className='pt-5'>
        <Carousel style={{textAlign:'center'}}>
      <Carousel.Item >
        <img src={product1}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={product1}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={product1}  />
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col>
        <h2 className='pt-5' style={{paddingBottom:'60px'}}>
            Bawang Goreng
        </h2>
        <span >
        s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. s simply dummy text of the printing and typesetting industry. 
        </span>

        <div style={{paddingTop:'60px'}}>

        <Button variant="success" >
            <img style={{marginRight:'10px', width:'25px'}}
                src={wal}
                alt='icon'
                className='icon-img'
            ></img >
            Pesan Sekarang
        </Button>{' '}
        <Button style={{background:'#D37925'}}>Pesan Sekarang</Button>{' '}
        </div>
        </Col>
      </Row>
    </Container>
    </div>    
    )

}
export default Product