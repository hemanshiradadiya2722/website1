// import Header from "./Header";
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import FTop from './FTop';
// import Footer from "./Footer";

function Faq() {
    return (
        <div>
            <div className="faq_t">
                <Container>
                    <Row>
                        <Col>
                            <div className="spacer">
                                <h2 className="text-center f_head ">FAQs</h2>
                                <p className="text-center py-3 f_h">Welcome to our FAQ section, where we aim to provide answers to some of the most common questions our Clients and visitors have</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                How do I start the process of buying a home with Real Estatoe?
                            </div>
                            <p className="F_t pb-4">
                                To begin the home-buying process, simply reach out to us via phone, email, or our website contact form. One of our experienced agents will schedule a consultation to discuss your needs and goals.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                Do I need to pay a fee for your services when buying a property?
                            </div>
                            <p className="F_t pb-4">
                                No, as a buyer, you typically do not pay a fee for our services. Our commission is typically paid by the seller, so you can benefit from our expertise at no extra cost to you.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                What should I consider when choosing a neighborhood to live in?
                            </div>
                            <p className="F_t pb-4">
                                We recommend considering factors such as your budget, proximity to work, schools, public transportation, safety, amenities, and your lifestyle preferences. Our agents can help you find the right neighborhood to suit your needs.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                How do I get pre-approved for a mortgage?
                            </div>
                            <p className="F_t pb-4">
                                We can connect you with reputable mortgage lenders who will assess your financial situation and provide a pre-approval letter, which strengthens your position as a serious buyer in the real estate market.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                What is the role of a real estate agent in the home-buying process?
                            </div>
                            <p className="F_t pb-4">
                                Real estate agents play a crucial role in helping you find and purchase a property. They provide market expertise, negotiate on your behalf, guide you through the paperwork, and ensure a smooth transaction from start to finish.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                How long does it typically take to find and purchase a property?
                            </div>
                            <p className="F_t pb-4">
                                The timeline can vary depending on market conditions, your specific requirements, and how quickly you find the right property. On average, the process can take a few weeks to several months.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                What costs should I budget for when buying a home?
                            </div>
                            <p className="F_t pb-4">
                                In addition to the down payment, you should budget for closing costs, which include fees for inspections, appraisals, and title insurance. Your agent will provide a detailed breakdown of expected expenses.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                How can I make a competitive offer on a property in a competitive market?
                            </div>
                            <p className="F_t pb-4">
                                Your agent will help you determine a competitive offer by considering recent sales, market conditions, and the property's condition. Offering a strong earnest money deposit and flexible closing dates can also make your offer more appealing.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                What happens during the home inspection process?
                            </div>
                            <p className="F_t pb-4">
                                A home inspection is a crucial step. An inspector examines the property for any issues or concerns, and you'll receive a report with findings. Depending on the results, you may negotiate repairs with the seller.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="F_text pb-3">
                                What should I expect on closing day?
                            </div>
                            <p className="F_t pb-4">
                                On closing day, you'll sign the final paperwork, transfer funds, and receive the keys to your new property. Your agent will ensure that all necessary documents are in order, making the process as smooth as possible.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className="F_foot text-center spacer">
                            <h4 className="pt-5">Still have questions?</h4>
                            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className='f_button'>Browse Listing</button>
                        </Col>   
                    </Row>
                </Container>
            </div>
            <FTop/>
        </div>
    );
}

export default Faq;