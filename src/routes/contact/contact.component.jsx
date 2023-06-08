import "./contact.styles.scss";

function Contact() {
  return (
    <div className="section-pages">
      <p className="heading-section heading-section-big">Contact Us</p>

      <p className="contact-para">
        Contact us for any further questions, possible projects and business
        partnerships
      </p>

      <div className="contact-container">
        <div className="contact-item">
          <p className="contact-item-heading">Contact Directly</p>
          <p className="contact-item-para">support@startupz.world</p>
          <p className="contact-item-para">+91 912-3548-073</p>
        </div>
        <div className="contact-item">
          <p className="contact-item-heading">Visit our office</p>
          <p className="contact-item-para">101, Relcon Enclave, NH-48</p>
          <p className="contact-item-para">Surat, Gujarat, India - 394325</p>
        </div>
        <div className="contact-item">
          <p className="contact-item-heading">work with us</p>
          <p className="contact-item-para">Send your CV to our email:</p>
          <p className="contact-item-para">career@startupz.world</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
