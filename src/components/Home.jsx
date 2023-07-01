import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from 'react-router-dom';

function Home () {
    return (
        <>

        <h1 className='text-center text-success my-5'> WelCome to Play With Numbers</h1>

        <div class="card text-center mb-3" >
            <div class="card-header">
                Addition
            </div>
            <div className="card-body">
                <h5 className="card-title">Play with Adding Numbers</h5>
                <p className="card-text">Let's start</p>
                <NavLink to = "/add" className = "btn btn-primary">Go</NavLink>
            </div>
        </div>
        <div class="card text-center mb-3">
            <div class="card-header">
                Substraction
            </div>
            <div className="card-body">
                <h5 className="card-title">Play with Substracting Numbers</h5>
                <p className="card-text">Let's start</p>
                <NavLink to = "/substract" className = "btn btn-primary">Go</NavLink>
            </div>
        </div>

        <div class="card text-center mb-3">
            <div class="card-header">
                Multiplication
            </div>
            <div className="card-body">
                <h5 className="card-title">Play with Multiplying Numbers</h5>
                <p className="card-text">Let's start</p>
                <NavLink to = "/multiply" className = "btn btn-primary">Go</NavLink>
            </div>
        </div>

        <div class="card text-center mb-3">
            <div class="card-header">
                Division
            </div>
            <div className="card-body">
                <h5 className="card-title">Play with Dividing Numbers</h5>
                <p className="card-text">Let's start</p>
                {/* <Link  to="/add" className="btn btn-primary">Go</Link> */}
                <NavLink to = "/division" className = "btn btn-primary">Go</NavLink>
            </div>
        </div>

        </>
    );
};

export default Home;