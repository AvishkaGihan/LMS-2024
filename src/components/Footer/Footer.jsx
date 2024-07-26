import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <img src="/public/logo.png" alt="LaMetric" />
        </div>
        <div className="footer-social-media">
          <p>Find us on social media</p>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>COMMUNITY</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#ideas">Ideas</a></li>
              <li><a href="#developers">Developers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#buy">Where to Buy</a></li>
              <li><a href="#resellers">Resellers</a></li>
              <li><a href="#influencers">Influencers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#declarations">Product Declarations</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
