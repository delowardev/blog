import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {

    const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE);

    return (
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
                            <form onSubmit={handleSubmit} action="#">
                                <div className="row form-row">
                                    <div className="col-6">
                                        <label htmlFor="name">Name *</label>
                                        <input required type="text" name="name"/>
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="company">Company</label>
                                        <input type="text" name="company"/>
                                        <ValidationError
                                            prefix="Company"
                                            field="company"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="row form-row">
                                    <div className="col-6">
                                        <label htmlFor="email">Email *</label>
                                        <input required placeholder="email@example.com" type="email" name="email"/>
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input placeholder="(xxx) xxx-xxx" type="tel" name="phone"/>
                                        <ValidationError
                                            prefix="Phone"
                                            field="phone"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="row form-row">
                                    <div className="col-12">
                                        <label htmlFor="subject">Subject *</label>
                                        <input required type="text" name="subject"/>
                                        <ValidationError
                                            prefix="Subject"
                                            field="subject"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="message">Your message *</label>
                                        <textarea required name="message" />
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="spacing" />
                                <button disabled={state.submitting} type="submit" className="btn is-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact