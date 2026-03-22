import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rahulsinghshah27@gmail.com" data-cursor="disable">
                rahulsinghshah27@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <div className="contact-phone-row">
              <p>
                <a href="tel:+919456306497" data-cursor="disable">
                  <FaPhoneAlt /> +91-9456306497
                </a>
              </p>
              <a
                href="https://wa.me/919456306497"
                target="_blank"
                data-cursor="disable"
                className="whatsapp-btn"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/rahulsinghshah"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulsinghshah"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h5>
              <MdCopyright /> 2025 Rahul Singh Shah
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
