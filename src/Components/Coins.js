import React from 'react';
import { Link } from 'react-router-dom';

function Coins({ loggedInUser }) {
    return (
        <div>
            <h2>Welcome, {loggedInUser.name}!</h2>
            <h4>You have the following Coins:</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="custom-box">
                                <h5>Currency</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="custom-box">
                                <h5>Count</h5>
                            </div>
                        </div>
                    </div>

                    {Object.entries(loggedInUser.coins).map(([coinSymbol, coinQuantity]) => (
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-box">
                                    <p>{coinSymbol}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="custom-box">
                                    <p>{coinQuantity}</p>
                                    <button className="bg-info"> <Link to={`/transfer/${coinSymbol}`}>Transfer</Link> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

        </div>
    );
}

export default Coins;