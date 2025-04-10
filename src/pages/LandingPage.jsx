import React from 'react';

const LandingPage = () => {
  return (
    <div style={landingPageStyle}>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <div style={logoStyle}>SocialVerse</div>
        <ul style={navLinksStyle}>
          <li style={navItemStyle}><a href="#features" style={linkStyle}>Features</a></li>
          <li style={navItemStyle}><a href="#community" style={linkStyle}>Community</a></li>
          <li style={navItemStyle}><a href="#pricing" style={linkStyle}>Pricing</a></li>
          <li style={navItemStyle}><a href="/login" style={buttonLinkStyle}>Log In</a></li>
          <li style={navItemStyle}><a href="/register" style={primaryButtonLinkStyle}>Sign Up</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Connect, Share, and Discover Your World</h1>
          <p style={heroSubtitleStyle}>Join a vibrant community where you can share your moments, connect with friends, and discover new interests.</p>
          <div style={heroButtonsStyle}>
            <a href="/register" style={heroPrimaryButtonStyle}>Get Started for Free</a>
            <a href="#features" style={heroSecondaryButtonStyle}>Explore Features</a>
          </div>
        </div>
        <div style={heroImageStyle}>
          {/* Replace with your actual image */}
          <img src="https://via.placeholder.com/600x400/77baff/ffffff?Text=Social%20Moments" alt="Social Moments" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={featuresSectionStyle}>
        <h2 style={sectionTitleStyle}>Awesome Features</h2>
        <div style={featuresGridStyle}>
          <div style={featureCardStyle}>
            <img src="https://via.placeholder.com/50/4CAF50/ffffff?Text=Share" alt="Share" style={featureIconStyle} />
            <h3 style={featureTitleStyle}>Share Your Life</h3>
            <p style={featureDescriptionStyle}>Effortlessly share photos, videos, and updates with your friends and followers.</p>
          </div>
          <div style={featureCardStyle}>
            <img src="https://via.placeholder.com/50/2196F3/ffffff?Text=Connect" alt="Connect" style={featureIconStyle} />
            <h3 style={featureTitleStyle}>Connect with Friends</h3>
            <p style={featureDescriptionStyle}>Stay in touch with the people you care about and make new connections.</p>
          </div>
          <div style={featureCardStyle}>
            <img src="https://via.placeholder.com/50/FF9800/ffffff?Text=Discover" alt="Discover" style={featureIconStyle} />
            <h3 style={featureTitleStyle}>Discover Interests</h3>
            <p style={featureDescriptionStyle}>Explore communities, groups, and trending topics that match your passions.</p>
          </div>
          <div style={featureCardStyle}>
            <img src="https://via.placeholder.com/50/9C27B0/ffffff?Text=Personalize" alt="Personalize" style={featureIconStyle} />
            <h3 style={featureTitleStyle}>Personalized Feed</h3>
            <p style={featureDescriptionStyle}>See content that's relevant to you, based on your interactions and interests.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" style={communitySectionStyle}>
        <h2 style={sectionTitleStyle}>Join Our Growing Community</h2>
        <div style={communityContentStyle}>
          <div style={communityImageStyle}>
            {/* Replace with your actual image */}
            <img src="https://via.placeholder.com/500x350/ffc107/333333?Text=Vibrant%20Community" alt="Vibrant Community" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }} />
          </div>
          <div style={communityDescriptionStyle}>
            <p style={communityParagraphStyle}>Become part of a diverse and inclusive community where you can share your voice and connect with like-minded individuals.</p>
            <p style={communityParagraphStyle}>Explore groups based on your hobbies, interests, and location. Find your tribe and engage in meaningful conversations.</p>
            <a href="/register" style={communityButtonStyle}>Join the Community</a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={pricingSectionStyle}>
        <h2 style={sectionTitleStyle}>Flexible Pricing Plans</h2>
        <div style={pricingCardsContainerStyle}>
          <div style={pricingCardStyle}>
            <h3 style={pricingCardTitleStyle}>Basic</h3>
            <p style={pricingCardPriceStyle}>Free</p>
            <ul style={pricingCardFeaturesStyle}>
              <li style={pricingCardFeatureItemStyle}>Unlimited Posts</li>
              <li style={pricingCardFeatureItemStyle}>Basic Profile</li>
              <li style={pricingCardFeatureItemStyle}>Follow Friends</li>
            </ul>
            <a href="/register" style={pricingCardButtonStyle}>Get Started</a>
          </div>
          <div style={pricingCardStyle}>
            <h3 style={pricingCardTitleStyle}>Premium</h3>
            <p style={pricingCardPriceStyle}>$9.99/month</p>
            <ul style={pricingCardFeaturesStyle}>
              <li style={pricingCardFeatureItemStyle}>All Basic Features</li>
              <li style={pricingCardFeatureItemStyle}>Advanced Analytics</li>
              <li style={pricingCardFeatureItemStyle}>Priority Support</li>
              <li style={pricingCardFeatureItemStyle}>Ad-Free Experience</li>
            </ul>
            <a href="/register" style={pricingCardPrimaryButtonStyle}>Upgrade Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p style={footerTextStyle}>&copy; {new Date().getFullYear()} SocialVerse. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Inline Styles (Organized for readability)
const landingPageStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: '1.6',
  color: '#333',
  backgroundColor: '#f7f7f7',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  overflowX: 'hidden',
};

const navbarStyle = {
  background: '#fff',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#007bff',
};

const navLinksStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
};

const navItemStyle = {
  marginLeft: '1.5rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#555',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#007bff',
  },
};

const buttonLinkStyle = {
  ...linkStyle,
  padding: '0.7rem 1.2rem',
  border: '1px solid #007bff',
  borderRadius: '6px',
  color: '#007bff',
  '&:hover': {
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

const primaryButtonLinkStyle = {
  ...buttonLinkStyle,
  backgroundColor: '#007bff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
  },
};

const heroSectionStyle = {
  padding: '4rem 2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const heroContentStyle = {
  textAlign: 'left',
  marginRight: '2rem',
  maxWidth: '50%',
};

const heroTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem',
};

const heroSubtitleStyle = {
  fontSize: '1.1rem',
  color: '#666',
  marginBottom: '2rem',
};

const heroButtonsStyle = {
  display: 'flex',
};

const heroPrimaryButtonStyle = {
  textDecoration: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '0.8rem 1.5rem',
  borderRadius: '6px',
  fontSize: '1.1rem',
  marginRight: '1rem',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
};

const heroSecondaryButtonStyle = {
  textDecoration: 'none',
  color: '#007bff',
  border: '1px solid #007bff',
  padding: '0.8rem 1.5rem',
  borderRadius: '6px',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: '#e9f5ff',
    color: '#0056b3',
  },
};

const heroImageStyle = {
  maxWidth: '50%',
};

const featuresSectionStyle = {
  padding: '4rem 2rem',
  backgroundColor: '#fff',
};

const sectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginBottom: '2.5rem',
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const featureCardStyle = {
  background: '#f9f9f9',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
};

const featureIconStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  color: '#fff',
  marginBottom: '1rem',
};

const featureTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '0.5rem',
};

const featureDescriptionStyle = {
  color: '#666',
  fontSize: '0.95rem',
};

const communitySectionStyle = {
  padding: '4rem 2rem',
  background: '#e9f5ff',
};

const communityContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '2rem',
};

const communityImageStyle = {
  maxWidth: '50%',
};

const communityDescriptionStyle = {
  maxWidth: '50%',
  textAlign: 'left',
};

const communityParagraphStyle = {
  color: '#555',
  marginBottom: '1rem',
  fontSize: '1rem',
};

const communityButtonStyle = {
  textDecoration: 'none',
  backgroundColor: '#28a745',
  color: '#fff',
  padding: '0.8rem 1.5rem',
  borderRadius: '6px',
  fontSize: '1.1rem',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#1e7e34',
  },
};

const pricingSectionStyle = {
  padding: '4rem 2rem',
  background: '#fff',
};

const pricingCardsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const pricingCardStyle = {
  background: '#f9f9f9',
  padding: '1.5rem',
  borderRadius: '8px',
  textAlign: 'center',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  width: '300px',
};

const pricingCardTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem',
};

const pricingCardPriceStyle = {
  fontSize: '2rem',
  color: '#007bff',
  marginBottom: '1.5rem',
};

const pricingCardFeaturesStyle = {
  listStyle: 'none',
  padding: 0,
  marginBottom: '1.5rem',
};

const pricingCardFeatureItemStyle = {
  padding: '0.5rem 0',
  borderBottom: '1px solid #eee',
};

const pricingCardButtonStyle = {
  textDecoration: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '0.8rem 1.5rem',
  borderRadius: '6px',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
};

const pricingCardPrimaryButtonStyle = {
  ...pricingCardButtonStyle,
  backgroundColor: '#28a745',
  '&:hover': {
    backgroundColor: '#1e7e34',
  },
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem 0',
  fontSize: '0.9rem',
};

const footerTextStyle = {
  margin: 0,
};

export default LandingPage;