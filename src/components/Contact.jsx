import React from 'react'
import "../css/contact.css"
import Button from "./Button"
import Testimonials from "./Testimonials"
const Contact = () => {
    return (
        <section className='contact'>

            <div className='contact-qutu'>
                <div className='contact-text'>
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you! Whether you have questions about our furniture collections, need assistance with a purchase,
                        or simply want to share your feedback, our team is here to help.
                        Customer satisfaction is our top priority, and we are dedicated to providing exceptional service. Our knowledgeable and
                        friendly staff is ready to assist you in finding the perfect furniture pieces to suit your style and needs.

                        Reach out to us via phone, email, or visit our showroom to experience the quality and beauty of our furniture firsthand.
                        We are committed to ensuring your home is filled with elegance, comfort, and functionality.
                        We look forward to serving you and helping you create a space you love with our exquisite furniture.
                        <br /> <br />
                        Thank you for choosing InWood.</p>
                </div>
                <form action="submit">
                    <input type="text" placeholder='Full name' />
                    <input type="email" placeholder='E-mail address' />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                    <Button butonYazisi={"SEND MESSAGE"} />
                </form>
            </div>

            <div className="filiallar">
                <div className="qutu">
                    <h5>BAKU OFFICE</h5>
                    <a href="#">Telephone: +994 51 362 29 39</a>
                    <a href="mailto:elmirsultann@gmail.com">E-mail: elmirsultann@gmail.com</a>
                    <a href="https://goo.gl/maps/7sYQtQVog8GLT6Fg9">Address: Ganjlik,Baku</a>
                </div>

                <div className="qutu">
                    <h5>ZURICH OFFICE</h5>
                    <a href="#">Telephone: +994 51 362 29 39</a>
                    <a href="mailto:elmirsultann@gmail.com">E-mail: elmirsultann@gmail.com</a>
                    <a href="https://goo.gl/maps/7sYQtQVog8GLT6Fg9">Address: Ganjlik</a>
                </div>

                <div className="qutu">
                    <h5>ROME OFFICE</h5>
                    <a href="#">Telephone: +994 51 362 29 39</a>
                    <a href="mailto:elmirsultann@gmail.com">E-mail: elmirsultann@gmail.com</a>
                    <a href="https://goo.gl/maps/7sYQtQVog8GLT6Fg9">Address: Ganjlik</a>
                </div>
            </div>

            <Testimonials />
        </section>
    )
}

export default Contact