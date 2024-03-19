import { Toaster, toast } from "react-hot-toast";
// import contact_img from "/assets/img/contact.jpg";
const ContactForm = ({ titleObj }) => {
  const { title, tag, desc } = titleObj;
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5105f54d-cb84-4e62-9b9d-9e71711398c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully.");
      event.target.reset();
    } else {
      toast.error("Error while submitting the form.");
      console.log("Error", data);
    }
  };
  return (
    <div className="contact-area ptb-100">
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <div className="width">
                <div className="sub-t">{tag}</div>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            </div>
            <div className="contact-form">
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="email"
                        required
                        data-error="Please enter your Email Address"
                        placeholder="Email Address"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        required
                        data-error="Please enter your subject"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        className="form-control"
                        id="phone_number"
                        required
                        data-error="Please enter your phone number"
                        placeholder="Phone Number"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mb-5">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        cols="30"
                        rows="6"
                        required
                        data-error="Please enter your message"
                        placeholder="Write your message..."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      <i className="ri-mail-send-line"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image">
              {/* <img src={contact_img.src} alt="image" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
