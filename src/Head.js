import Container from 'react-bootstrap/Container';
import myimg from './assets/asset 1.png';
import './App.css';

function Head() {
    return (
        <div className='bgcolor'>

            <div className='b_text'>
                <Container>
                    <h1>
                        Your Home Search, Simplified – <br></br>Explore with Us!
                    </h1>
                    <p>
                        Welcome to Real Estatoe, where your journey to finding the perfect home begins. Whether you're searching for a cozy apartment, a spacious family house, or an investment property, we have the expertise and resources to make your vision a reality.
                    </p>
                    <div className='button'>
                        <button className='h_button'>Browse Listing</button>
                        <button className='h_button1'>List Your Place</button>
                    </div>
                </Container>
            </div>
            <div>
                <img src={myimg} className='ban-img'></img>
            </div>
            {/* <img src={myimg}></img>  */}

        </div>

    )
}

export default Head;