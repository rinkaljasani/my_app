import React from 'react';
const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="col-md-6 col-10 mx-auto">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">First Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your first name..." />
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Last Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Last name" />
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div><br/>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div><br/>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default Contact;