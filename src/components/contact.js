import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";


const toastSetting = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
}

const Contact = () => {

    const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    const showError = (msg = null) => {
        toast.error(msg ? msg : 'Something is wrong! Please try again later.', toastSetting)
    }

    const showSuccess = () => {
        toast.success('Thanks for contacting, I will get back to you soon.', toastSetting)
        setName("");
        setCompany("");
        setEmail("")
        setPhone("")
        setSubject("")
        setMessage("")
    }

    const submit = (e) => {
        handleSubmit(e).then((e) => {
            if (e.body?.ok) {
                showSuccess();
            } else if(e.body?.error) {
                showError(e.body?.error);
            } else {
                showError();
            }
        }).catch(() => {
            showError();
        })
    }

    return (
        <div className="contact-section">
            <ToastContainer />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="contact-header">
                            <h1>Let's connect</h1>
                            <p>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>
                        </div>
                        <div className="spacing is-lg" />
                        <div className="contact-form">
                            <form onSubmit={submit} action="#">
                                <div className="row form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="name">Name *</label>
                                        <input
                                            value={name}
                                            required
                                            type="text"
                                            name="name"
                                            onChange={
                                                (e) => {
                                                    setName(e.target.value);
                                                }
                                            }
                                        />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="company">Company</label>
                                        <input
                                            value={company}
                                            type="text"
                                            name="company"
                                            onChange={
                                                (e) => {
                                                    setCompany(e.target.value);
                                                }
                                            }
                                        />
                                        <ValidationError
                                            prefix="Company"
                                            field="company"
                                            errors={state.errors}
                                        />
                                    </div>
                                </div>
                                <div className="row form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            value={email}
                                            required
                                            placeholder="email@example.com"
                                            type="email"
                                            name="email"
                                            onChange={
                                                (e) => {
                                                    setEmail(e.target.value);
                                                }
                                            }
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            value={phone}
                                            placeholder="(xxx) xxx-xxx"
                                            type="tel"
                                            name="phone"
                                            onChange={
                                                (e) => {
                                                    setPhone(e.target.value);
                                                }
                                            }
                                        />
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
                                        <input
                                            value={subject}
                                            required
                                            type="text"
                                            name="subject"
                                            onChange={
                                                (e) => {
                                                    setSubject(e.target.value);
                                                }
                                            }
                                        />
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
                                        <textarea
                                            value={message}
                                            required
                                            name="message"
                                            onChange={
                                                (e) => {
                                                    setMessage(e.target.value);
                                                }
                                            }
                                        />
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