import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <div>
            <section id="header" className="navbar d-flex">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 justify-content-center d-flex flex-column">
                                <h1 >{props.name} <strong className="brand-name">The Creative </strong></h1>
                                <h2 className="my-3">We are the team of creative developer</h2>
                                <div className="mt-03">
                                    <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                 <img src={ props.imgsrc } className="img-fluid animated" alt="not" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Common;