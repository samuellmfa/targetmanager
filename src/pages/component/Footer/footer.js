import React from "react"
import Link from "next/link"
import Image from "next/image"
export default function _footer(vercelLogo)
{

    return  (  
      <footer className="text-center text-lg-start bg-white text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected  :  </span>
          <Link href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3" ><Image src="/images/twitter.svg" alt="Sample image" width={18} height={20} /></Link>
   <Link href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3"><Image src="/images/facebook.svg" alt="Sample image" width={18} height={20} /></Link>
   <Link href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3"><Image src="/images/google.svg" alt="Sample image" width={18} height={20} /></Link>
   <Link href="/target" target="_self"rel="noopener noreferrer" className="lead fw-normal mb-0 me-3"><Image src="/images/linkedin.svg" alt="Sample image" width={18} height={20} /></Link>

        </div>
        {/* Left */}

        {/* Right */}
        <div>
    
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>Chi Planning solutions
              </h6>
              <p>
              Everything you need to automate your strategy,
all in one place.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <Link href="#!" className="text-reset">Planning</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Reporting</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Charts</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Evaluation</Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link href="#!" className="text-reset">Pricing</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Settings</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Orders</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Help</Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-secondary"></i>Berlin, WS str 12279, Germany</p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                info@chi.com
              </p>
              <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
        © 2023 Copyright:
        <Link className="text-reset fw-bold" href="/">chi technologies</Link>
      </div>
      {/* Copyright */}
    </footer>
      )
  
}