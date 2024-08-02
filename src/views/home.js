import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Hero4 from '../components/hero4'
import Features221 from '../components/features221'
import Gallery7 from '../components/gallery7'
import FAQ5 from '../components/faq5'
import CTA261 from '../components/cta261'
import Features12 from '../components/features12'
import Steps21 from '../components/steps21'
import Testimonial17 from '../components/testimonial17'
import Contact11 from '../components/contact11'
import Footer15 from '../components/footer15'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ruddy Extra Small Sandpiper</title>
        <meta property="og:title" content="Ruddy Extra Small Sandpiper" />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="home-text thq-body-small thq-link">
              Default value
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text001 thq-body-small thq-link">
              Default value
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text002 thq-body-small thq-link">
              Default value
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text003 thq-body-small thq-link">
              Default value
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text004 thq-body-small thq-link">
              Contact Us
            </span>
          </Fragment>
        }
      ></Navbar2>
      <Hero4
        action1={
          <Fragment>
            <span className="home-text005 thq-body-small">Default value</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text006 thq-body-small">Default value</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text007 thq-body-large">Default value</p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text008 thq-heading-1">Default value</h1>
          </Fragment>
        }
      ></Hero4>
      <Features221
        content1={
          <Fragment>
            <span className="home-text009 thq-body-small">Default value</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text010 thq-heading-2">Default value</h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h2 className="home-text011 thq-heading-2">Default value</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text012 thq-heading-2">Default value</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h1 className="home-text013 thq-heading-2">Default value</h1>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <h1 className="home-text014 thq-heading-2">Default value</h1>
          </Fragment>
        }
        feature5Title={
          <Fragment>
            <h1 className="home-text015 thq-heading-2">Default value</h1>
          </Fragment>
        }
        feature6Title={
          <Fragment>
            <h1 className="home-text016 thq-heading-2">Default value</h1>
          </Fragment>
        }
        feature7Title={
          <Fragment>
            <h1 className="home-text017 thq-heading-2">Default value</h1>
          </Fragment>
        }
        feature8Title={
          <Fragment>
            <h1 className="home-text018 thq-heading-2">Default value</h1>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text019 thq-body-small">Default value</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text020 thq-body-small">Default value</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text021 thq-body-small">Default value</span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="home-text022 thq-body-small">Default value</span>
          </Fragment>
        }
        feature5Description={
          <Fragment>
            <span className="home-text023 thq-body-small">Default value</span>
          </Fragment>
        }
        feature6Description={
          <Fragment>
            <span className="home-text024 thq-body-small">Default value</span>
          </Fragment>
        }
        feature7Description={
          <Fragment>
            <span className="home-text025 thq-body-small">Default value</span>
          </Fragment>
        }
        feature8Description={
          <Fragment>
            <span className="home-text026 thq-body-small">Default value</span>
          </Fragment>
        }
      ></Features221>
      <Gallery7
        content1={
          <Fragment>
            <span className="home-text027 thq-body-large">
              Explore images from our equine therapy and meditation retreats at
              Blissful Existence Healing Acres.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text028 thq-heading-2">Gallery</h2>
          </Fragment>
        }
      ></Gallery7>
      <FAQ5
        action={
          <Fragment>
            <span className="home-text029 thq-body-small">Contact</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text030 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text033 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text036 thq-heading-2">FAQs</h2>
          </Fragment>
        }
        heading2={
          <Fragment>
            <h2 className="home-text037 thq-heading-2">
              Still have a question?
            </h2>
          </Fragment>
        }
        faq1Answer={
          <Fragment>
            <span className="home-text038 thq-body-small">
              Equine therapy is a form of experiential therapy that involves
              interactions between patients and horses. It can help individuals
              build confidence, improve communication skills, and develop
              emotional awareness.
            </span>
          </Fragment>
        }
        faq2Answer={
          <Fragment>
            <span className="home-text039 thq-body-small">
              During a meditation retreat at Blissful Existence Healing Acres,
              you can expect guided meditation sessions, mindfulness practices,
              nature walks, and opportunities for self-reflection and
              relaxation.
            </span>
          </Fragment>
        }
        faq3Answer={
          <Fragment>
            <span className="home-text040 thq-body-small">
              Yes, at Blissful Existence Healing Acres, we provide personalized
              treatment plans tailored to each individual&apos;s specific needs
              and goals for healing and growth.
            </span>
          </Fragment>
        }
        faq4Answer={
          <Fragment>
            <span className="home-text041 thq-body-small">
              Equine therapy can benefit individuals by promoting emotional
              regulation, building trust and empathy, enhancing self-awareness,
              and providing opportunities for personal growth and healing.
            </span>
          </Fragment>
        }
        faq5Answer={
          <Fragment>
            <span className="home-text042 thq-body-small">
              Yes, we offer comfortable accommodation options at our retreat
              center in the picturesque Pocono Mountains, providing a peaceful
              and serene environment for healing and relaxation.
            </span>
          </Fragment>
        }
        faq6Answer={
          <Fragment>
            <span className="home-text043 thq-body-small">
              Our meditation retreats are structured to include a balance of
              guided meditation sessions, mindfulness practices, group
              activities, individual reflection time, and opportunities to
              connect with nature in the beautiful surroundings of the Pocono
              Mountains.
            </span>
          </Fragment>
        }
        faq7Answer={
          <Fragment>
            <span className="home-text044 thq-body-small">
              Yes, we offer programs that integrate equine therapy sessions with
              meditation retreat experiences to provide a holistic approach to
              healing and personal development.
            </span>
          </Fragment>
        }
        faq8Answer={
          <Fragment>
            <span className="home-text045 thq-body-small">
              Yes, our staff members are highly experienced in equine therapy
              techniques and meditation practices. They are dedicated to
              creating a supportive and nurturing environment for our
              clients&apos; healing journey.
            </span>
          </Fragment>
        }
        faq9Answer={
          <Fragment>
            <span className="home-text046 thq-body-small">
              To book a session or inquire about our services at Blissful
              Existence Healing Acres, please contact us through our website or
              give us a call. We look forward to assisting you on your path to
              healing and well-being.
            </span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <p className="home-text047 thq-body-large">
              What is equine therapy?
            </p>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <p className="home-text048 thq-body-large">
              What can I expect during a meditation retreat?
            </p>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <p className="home-text049 thq-body-large">
              Are the treatment plans personalized?
            </p>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <p className="home-text050 thq-body-large">
              How can equine therapy benefit me?
            </p>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <p className="home-text051 thq-body-large">
              Do you offer accommodation at the Pocono Mountains retreat?
            </p>
          </Fragment>
        }
        faq6Question={
          <Fragment>
            <p className="home-text052 thq-body-large">
              How are the meditation retreats structured?
            </p>
          </Fragment>
        }
        faq7Question={
          <Fragment>
            <p className="home-text053 thq-body-large">
              Can I combine equine therapy with meditation retreats?
            </p>
          </Fragment>
        }
        faq8Question={
          <Fragment>
            <p className="home-text054 thq-body-large">
              Are the staff members experienced in equine therapy and meditation
              practices?
            </p>
          </Fragment>
        }
        faq9Question={
          <Fragment>
            <p className="home-text055 thq-body-large">
              How can I book a session at Blissful Existence Healing Acres?
            </p>
          </Fragment>
        }
      ></FAQ5>
      <CTA261
        action1={
          <Fragment>
            <span className="home-text056">Default value</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text057 thq-body-large">Default value</p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text058 thq-heading-2">Default value</span>
          </Fragment>
        }
      ></CTA261>
      <Features12
        mainAction={
          <Fragment>
            <span className="home-text059 thq-body-small">
              Book your personalized healing retreat today!
            </span>
          </Fragment>
        }
        featureTitle={
          <Fragment>
            <h2 className="home-text060 thq-heading-2">
              Experience Equine Therapy and Meditation Retreats
            </h2>
          </Fragment>
        }
        featureSlogan={
          <Fragment>
            <span className="home-text061 thq-body-small">
              Heal your mind, body, and soul in nature&apos;s embrace.
            </span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="home-text062 thq-body-small">
              Read more about our equine therapy and meditation retreat
              experiences.
            </span>
          </Fragment>
        }
        featureDescription={
          <Fragment>
            <p className="home-text063 thq-body-large">
              Discover the transformative power of equine therapy and meditation
              retreats in the serene Pocono Mountains.
            </p>
          </Fragment>
        }
      ></Features12>
      <Steps21
        step1Title={
          <Fragment>
            <h2 className="home-text064 thq-heading-2">Default value</h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text065 thq-heading-2">Default value</h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text066 thq-heading-2">Default value</h2>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text067 thq-heading-2">Default value</h2>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text068 thq-body-small">Default value</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text069 thq-body-small">Default value</span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text070 thq-body-small">Default value</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text071 thq-body-small">Default value</span>
          </Fragment>
        }
      ></Steps21>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text072 thq-body-small">
              I found peace and healing through the equine therapy sessions at
              Blissful Existence Healing Acres. The serene environment and
              caring staff made my experience truly transformative.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text073 thq-body-small">
              The meditation retreat at Blissful Existence Healing Acres was
              exactly what I needed to recharge and reconnect with myself. I
              highly recommend it to anyone looking for a peaceful getaway.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text074 thq-body-small">
              The equine therapy sessions helped me overcome my anxiety and
              build confidence. The horses are amazing healers, and the team at
              Blissful Existence made me feel supported throughout my journey.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text075 thq-body-small">
              Attending the retreat in the Pocono Mountains was a life-changing
              experience. The combination of nature, meditation, and equine
              therapy was truly magical. I can&apos;t wait to visit again!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text076 thq-body-small">
              Read what our clients have to say about their experiences at
              Blissful Existence Healing Acres.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text077 thq-heading-2">Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text078 thq-body-large">Emily Smith</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text079 thq-body-large">
              Michael Johnson
            </strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text080 thq-body-large">Sarah Adams</strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text081 thq-body-large">
              David Roberts
            </strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text082 thq-body-small">Yoga Instructor</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text083 thq-body-small">
              Mindfulness Coach
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text084 thq-body-small">Therapist</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text085 thq-body-small">
              Retreat Participant
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact11
        email={
          <Fragment>
            <span className="home-text086 thq-body-small">
              info@blissfulexistencehealingacres.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text087 thq-body-small">
              +1 (555) 123-4567
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text088 thq-body-small">
              123 Tranquil Way, Pocono Mountains, PA 18346
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text089 thq-body-large">Default value</p>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text090 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
          </Fragment>
        }
        content3={
          <Fragment>
            <p className="home-text091 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
          </Fragment>
        }
        content5={
          <Fragment>
            <p className="home-text092 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text093 thq-heading-2">Default value</h2>
          </Fragment>
        }
      ></Contact11>
      <Footer15
        action1={
          <Fragment>
            <span className="home-text094 thq-body-small">
              Book Your Retreat Now
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text095 thq-body-small">
              Blissful Existence Healing Acres offers equine therapy and
              meditation retreats in the tranquil Pocono Mountains. Personalized
              treatment plans, ongoing support, and positive testimonials from
              clients.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text096 thq-body-small">
              Connect with us on social media for updates and inspiration
            </span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home-text097 thq-body-small">
              © 2023 Blissful Existence Healing Acres. All Rights Reserved.
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text098 thq-body-small">Default value</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text099 thq-body-small">Default value</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text100 thq-body-small">Default value</span>
          </Fragment>
        }
      ></Footer15>
    </div>
  )
}

export default Home
