// pages/terms-and-conditions.js
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import InnerHero from '../components/common/sections/InnerHero'

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | shiresTech</title>
        <meta name="description" content="Terms and Conditions for shiresTech" />
      </Head>
      <InnerHero
        title="Terms and Conditions"
        description="We revolutionizing digital engagement with the world's first hyperrealistic, interactive AI platforms. From livestreaming to customer service, we're redefining human-AI interaction across industries."
        imageSrc="/images/services-img/hero-img.png"
        imageAlt="AI Technology"
      />
      <div className='CommonScWrap'>
        <div className="container">

          <p>Welcome to shiresTech! These terms and conditions outline the rules and regulations for the use of our website.</p>

          <h4>1. Acceptance of Terms</h4>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use shiresTech if you do not agree to all of the terms stated on this page.
          </p>

          <h4>2. Intellectual Property Rights</h4>
          <p>
            Unless otherwise stated, shiresTech and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
          </p>

          <h4>3. Restrictions</h4>
          <ul>
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is damaging</li>
            <li>Using this website contrary to applicable laws and regulations</li>
          </ul>

          <h4>4. Your Content</h4>
          <p>
            In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website.
          </p>

          <h4>5. Limitation of Liability</h4>
          <p>
            In no event shall shiresTech, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
          </p>

          <h4>6. Changes to Terms</h4>
          <p>
            We may revise these terms and conditions at any time as we see fit. By using this Website you are expected to review such terms on a regular basis.
          </p>

          <h4>7. Governing Law</h4>
          <p>
            These terms will be governed by and interpreted in accordance with the laws of your country or state.
          </p>

          <p className="">If you have any questions, contact us at: <a href="mailto:support@shires.in">support@shires.in</a></p>
        </div>
      </div >
    </>
  )
}
