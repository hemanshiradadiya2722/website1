import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function ListForm(){
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="spacer">
                            <div>
                                <p>Share your details and we will connect with your shortly.</p>
                            </div>
                            <div className="CText">
                                <p className="mb-1 mt-4">First Name</p>
                                <input type="text" className="box w-75"></input>
                                
                            </div>
                            <div>
                                <p className="mb-1 mt-4">Choose a topic</p>
                                <input type="text" className="box w-75"></input>
                            </div>
                            <div>
                                <p className="mb-1 mt-4">Message</p>
                                <input type="text" className="box1 w-75 lh-lg py-5"></input>
                            </div>
                            <div className="py-4">
                                <form action="/action_page.php">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"></input>
                                        <label class="form-check-label" for="check2">I accept the terms</label>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <button className='h_button my-3 text-center'>Submit</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default ListForm;