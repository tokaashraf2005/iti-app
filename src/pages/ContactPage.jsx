import FormSection from './FormSection.jsx';
import '../styles/contact.css'
// import Header from './Header'; 

function ContactPage() {
  return (
    <>
      <main className="space">
        <div className="container my-4">
          <div className="row">
            {/* Home > Contact links */}
            <div className="col-12">
              <a href="home.html" className="text-secondary text-decoration-none fw-medium">Home</a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="#A2A2A2" width="15">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              <a href="contact.html" className="text-secondary-emphasis active text-decoration-none fw-medium">Contact Us</a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="#2E2E2E" width="15">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>

            {/* First Paragraph block */}
            <div className="col-12">
              <p className="fw-semibold lh-1 custom-font-size my-5 mb-0">
                We believe in sustainable<br />
                decor. We’re passionate about<br />
                life at home.
              </p>
            </div>

            {/* Second Paragraph block */}
            <div className="col-12">
              <p className="lh-base fw-light my-4">
                Our features timeless furniture, with natural fabrics, curved
                lines, plenty of mirrors and classic design, which <br />
                can be
                incorporated into any decor project. The pieces enchant for their sobriety, to last for
                generations,<br />
                faithful to the shapes of each period, with a touch of the present.
              </p>
            </div>
          </div>

          {/*--- ABOUT US SECTION ---*/}
          <section className="row gx-0 mt-5">
            {/* About Us Image */}
            <div className="col-12 col-md-6">
              <img src="/assets/images/4.jpg" alt="about" className="img-fluid w-100 h-100 object-fit-cover"
                style={{ maxHeight: '400px' }} />
            </div>

            {/* About Us Text */}
            <div className="col-12 col-md-6 bg-custom-light p-4 d-flex flex-column justify-content-center">
              <div className="container px-5">
                <p className="fw-semibold lh-1 fs-1 my-5 mb-5">About Us</p>
                <p style={{ fontSize: '13px' }}>
                  3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.<br />
                  Our customer service is always prepared to support you
                  <br />
                  24/7
                </p>
                {/* shop now link */}
                <a href="shop.html"
                  className="d-flex align-items-center lh-base gap-2 text-decoration-none text-dark fw-bold">
                  <span className="border-bottom border-dark">Shop Now</span>
                  {/* arrow icon */}
                  <svg className="arrow-icon text-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" width="20">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/*--- CONTACT US SECTION ---*/}
          <section className="py-5">
            <div className="container">
              <div className="row">
                {/* Contact us Title */}
                <div className="col-12">
                  <h2 className="text-center fs-1 my-5">Contact Us</h2>
                </div>
              </div>

              <div className="row text-center">
                {/* Address Card */}
                <div className="col-12 col-md-4">
                  <div className="bg-custom-light p-4 d-flex flex-column align-items-center gap-3 h-100">
                    {/* location Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h6 className="text-secondary fw-bold mb-1">Address</h6>
                    <p className="fw-bold mb-0">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="col-12 col-md-4">
                  <div className="bg-custom-light p-4 d-flex flex-column align-items-center gap-3 h-100">
                    {/* phone icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 9.8 19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.81.33 1.6.61 2.36a2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l1.81-1.18a2 2 0 0 1 2.11-.45c.76.28 1.55.49 2.36.61A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    <h6 className="text-secondary fw-bold mb-1">Phone</h6>
                    <p className="fw-bold mb-0">+84 234 567 890</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="col-12 col-md-4">
                  <div className="bg-custom-light p-4 d-flex flex-column align-items-center gap-3 h-100">
                    {/* email icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V6a2 2 0 0 1 2-2Z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <h6 className="text-secondary fw-bold mb-1">Email</h6>
                    <p className="fw-bold mb-0">support@3legant.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*--- FORM & MAP SECTION ---*/}
          <FormSection /> {/* Encapsulated the form and map into its own component */}

        </div>
      </main>
    </>
  );
}

export default ContactPage;