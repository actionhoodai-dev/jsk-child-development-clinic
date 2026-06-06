import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Brief About */}
          <div className="footer-about">
            <Image
              src="/assets/logo.png"
              alt="JSK Clinic Logo"
              width={320}
              height={80}
              style={{ marginBottom: '20px', display: 'block', height: '80px', width: 'auto' }}
            />
            <p>
              JSK Child Development & Physiotherapy Center is a premier rehabilitation clinic located in Karaikudi, Tamil Nadu. Led by a Canada-trained specialist, we provide world-class, compassionate care for children and adults.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/child-services">Child Services</Link>
              </li>
              <li>
                <Link href="/physio-services">Physiotherapy</Link>
              </li>
              <li>
                <Link href="/conditions">Conditions We Treat</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                47, Annamalai Chettiyar Street,
                <br />
                Chekkalai, Karaikudi,
                <br />
                Tamil Nadu - 630001
              </span>
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+919363437008">+91 93634 37008</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:jskrehabcenter@gmail.com">jskrehabcenter@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-clock"></i>
              <span>
                Mon - Sat: 9:00 AM - 8:00 PM
                <br />
                Sun: Closed
              </span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <a
                href="https://www.instagram.com/jskchild_development/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Follow us on Instagram"
              >
                <i className="fab fa-instagram"></i>
                <span>@jskchild_development</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright banner */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} JSK Child Development & Physiotherapy Center. All rights reserved.</p>
          <p>
            Designed for World-Class Healthcare | Made in Karaikudi
          </p>
        </div>
      </div>
    </footer>
  );
}
