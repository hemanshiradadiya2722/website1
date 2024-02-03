import { Row, Col, Container } from "react-bootstrap";
import fimg from './assets/asset 8.jpeg';


function CForms() {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="spacer">
                                <div>
                                    <h2 className="CHead mb-5">Get in touch</h2>
                                </div>

                                <div className="CText">
                                    <p className="mb-1 mt-4">Name</p>
                                    <input type="text" className="box w-75"></input>
                                </div>
                                <div>
                                    <p className="mb-1 mt-4">Email</p>
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
                                    <button className='h_button my-3'>Submit</button>
                                </div>

                            </div>
                        </Col>
                        <Col lg={6}>
                            {/* <div className="CImg">
                                <img src={fimg}></img>
                            </div> */}
                            <div className="CCimg">
                                <div className="CPad"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default CForms;