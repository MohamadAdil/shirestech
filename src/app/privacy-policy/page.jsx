// pages/privacy-policy.js
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import InnerHero from '../components/common/sections/InnerHero'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | shiresTech</title>
        <meta name="description" content="Privacy Policy for shiresTech" />
      </Head>
      <InnerHero
        title="Privacy Policy"
        description="We revolutionizing digital engagement with the world's first hyperrealistic, interactive AI platforms. From livestreaming to customer service, we're redefining human-AI interaction across industries."
        imageSrc="/images/services-img/hero-img.png"
        imageAlt="AI Technology"
      />
      <div className='CommonScWrap'>
        <div className="container">

          <p>At shiresTech, accessible from https://www.shires.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that are collected and recorded by shiresTech and how we use it.</p>

          <h4>1. Information We Collect</h4>
          <p>We may collect personal information such as your name, email address, phone number, and other contact details when you voluntarily submit a form or register on our site.</p>

          <h4>2. How We Use Your Information</h4>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Send you emails or respond to your queries</li>
          </ul>

          <h4>3. Log Files</h4>
          <p>shiresTech follows a standard procedure of using log files. These files log visitors when they visit websites — a part of hosting services' analytics.</p>

          <h4>4. Cookies and Web Beacons</h4>
          <p>Like any other website, shiresTech uses 'cookies'. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited.</p>

          <h4>5. Third Party Privacy Policies</h4>
          <p>Our Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of third-party services.</p>

          <h4>6. Data Security</h4>
          <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access or disclosure of your personal information.</p>

          <h4>7. Children’s Information</h4>
          <p>We do not knowingly collect any personally identifiable information from children under the age of 13.</p>

          <h4>8. Consent</h4>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <h4>9. Updates to this Privacy Policy</h4>
          <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

          <p>If you have questions, contact us at <a href="mailto:support@shires.in">support@shires.in</a></p>
        </div>
      </div>
    </>
  )
}
