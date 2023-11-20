import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/style.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
<div>
    {/* landing Page */}
    <div className='Bg'>
    <NavigationBar/>
        <Row className='tagline text-white d-flex '>
            <Col className='col-6 ext-white d-flex justify-content-center text-align-center'>
            <h1>Bawang Goreng Pawon Dinar</h1>
            </Col>
        </Row>

    </div>
    {/* End Landing Page */}
</div>
  );
}

export default App;
