export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Get in Touch</h1>
      <p>
        I’m always open to new opportunities, collaborations, or just a friendly
        conversation. Feel free to reach out through any of the channels below.
        I usually reply within 1–2 business days.
      </p>

      {/* Availability */}
      <div className="contact-group">
        <h2>Availability</h2>
        <ul>
          <li>
            <strong>Monday, Wednesday, Thursday:</strong> 9 AM – 6 PM
          </li>
          <li>
            <strong>Tuesday, Saturday:</strong> Limited availability
          </li>
          <li>
            <strong>Sunday:</strong> Unavailable
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="contact-group">
        <h2>Contact Info</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:bhogalharman7@gmail.com">bhogalharman7@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+16043564654">(604) 356-4654</a>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="contact-group">
        <h2>Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/harman-bhogal-b2b532350/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/HarmanB1" target="_blank">
              GitHub
            </a>
          </li>
          
          <li>
            <a href="https://discord.com/users/relaxi#0137" target="_blank">
              Discord: relaxi#0137
            </a>
          </li>
        </ul>
      </div>

      
    </section>
  );
};
