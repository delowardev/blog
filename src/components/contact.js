import * as React from "react";

const Contact = () => (
    <div className="container-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="contact-header">
                        <h1>Let's connect</h1>
                        <p>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>
                    </div>
                    <div className="spacing is-lg" />
                    <div className="contact-form">
                        <form action="#">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="company">Company</label>
                                    <input type="text" name="company"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="email">Email</label>
                                    <input placeholder="email@example.com" type="email" name="email"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input placeholder="(xxx) xxx-xxx" type="tel" name="phone"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" name="subject"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="message">Your message</label>
                                    <textarea name="message" />
                                </div>
                            </div>
                            <div className="spacing" />
                            <button className="btn is-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Contact