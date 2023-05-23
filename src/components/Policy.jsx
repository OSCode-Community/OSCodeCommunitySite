import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <>
      <div class="phead">
        <h1>Privacy Policy</h1>
      </div>
      <section id="main">
        <p>Last updated April 10, 2023</p>
        <div class="flex-container">
          <div class="flex-child magenta">
            <p>
              This privacy notice for OSCode (' Company ', 'we', 'us', or 'our'
              ), describes how and why we might collect, store, use, and/or
              share ('process' ) your information when you use our services (
              'Services'), such as when you:
            </p>
            <p>
              <ul>
                <li>
                  Visit our website at{" "}
                  <Link
                    to="https://www.oscode.co.in/"
                    target="_blank"
                    data-custom-class="link"
                    rel="noreferrer"
                  >
                    https://www.oscode.co.in/
                  </Link>{" "}
                  or any website of ours that links to this privacy notice.
                </li>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events.
                </li>
              </ul>
            </p>

            <p class="ques">
              <span class="concern">Questions or concerns?</span>
              <br />
              Reading this privacy notice will help you understand your privacy
              rights and choices. If you do not agree with our policies and
              practices, please do not use our services. If you still have any
              questions or concerns, please contact us at{" "}
              <Link to="mailto:oscode.community@gmail.com">
                oscode.community@gmail.com
              </Link>
            </p>
          </div>

          <div class="flex-child green">
            <img
              src="assets/img/pol.jpg"
              alt="privacy-img"
              class="privacy-img"
            />
          </div>
        </div>
      </section>

      <section id="summary">
        <div class="section-title">
          <p class="ptitle">Summary of Key Points</p>
        </div>
        <div>
          <p>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <Link to="#tableofcontents">table of contents</Link> below to find
            the section you are looking for.
          </p>
          <ul>
            <li class="arrow">
              {" "}
              <span>What personal information do we process?</span> When you
              visit, use, or navigate our services, we may process personal
              information depending on how you interact with OSCode and the
              Services, the choices you make, and the products and features you
              use. Learn more about{" "}
              <Link to="#personal">
                personal information you disclose to us.
              </Link>
            </li>
            <li class="arrow">
              {" "}
              <span>Do we process any sensitive personal information?</span> We
              do not process sensitive personal information.
            </li>
            <li class="arrow">
              {" "}
              <span>Do we receive any information from third parties?</span> We
              do not receive any information from third parties.
            </li>
            <li class="arrow">
              {" "}
              <span>How do we process your information?</span> We process your
              information to provide, improve, and administer our services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Learn more about{" "}
              <Link to="#process">how we process your information.</Link>
            </li>
            <li class="arrow">
              {" "}
              <span>
                In what situations and with which parties do we share personal
                information?
              </span>{" "}
              We may share information in specific situations and with specific
              third parties. Learn more about{" "}
              <Link to="#share">
                {" "}
                when and with whom we share your personal information.
              </Link>
            </li>
            <li class="arrow">
              {" "}
              <span>How do we keep your information safe?</span> We have
              organisational and technical processes and procedures in place to
              protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorised
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Learn more about{" "}
              <Link to="#safe">how we keep your information safe.</Link>
            </li>
            <li class="arrow">
              {" "}
              <span>What are your rights?</span> Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information. Learn
              more about <Link to="#privacy-rights"> your privacy rights.</Link>
            </li>
            <li class="arrow">
              {" "}
              <span>How do you exercise your rights?</span> The easiest way to
              exercise your rights is by submitting a{" "}
              <Link to="#tableofcontents"> data subject access request </Link>,
              or by contacting us. We will consider and act upon any request in
              accordance with applicable data protection laws.
            </li>
            <li class="arrow">
              {" "}
              <span>
                Want to learn more about what OSCode does with any information
                we collect?
              </span>{" "}
              <Link to="#notice">Review the privacy notice in full.</Link>{" "}
            </li>
          </ul>
        </div>
      </section>

      <section id="tableofcontents">
        <div class="section-title">
          <p class="ptitle">Table of Contents</p>
        </div>
        <div class="flex-container">
          <div class="flex-child magenta">
            <ol>
              <li>
                <Link to="personal">WHAT INFORMATION DO WE COLLECT?</Link>
              </li>
              <li>
                <Link to="process">HOW DO WE PROCESS YOUR INFORMATION?</Link>
              </li>
              <li>
                <Link to="share">
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </Link>
              </li>
              <li>
                <Link to="cookies">
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Link>
              </li>
              <li>
                <Link to="social">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link>
              </li>
              <li>
                <Link to="keep">HOW LONG DO WE KEEP YOUR INFORMATION?</Link>
              </li>
              <li>
                <Link to="safe">HOW DO WE KEEP YOUR INFORMATION SAFE?</Link>
              </li>
              <li>
                <Link to="privacy-rights">WHAT ARE YOUR PRIVACY RIGHTS?</Link>
              </li>
              <li>
                <Link to="controls">CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
              </li>
              <li>
                <Link to="california">
                  DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </Link>
              </li>
              <li>
                <Link to="updates">DO WE MAKE UPDATES TO THIS NOTICE?</Link>
              </li>
              <li>
                <Link to="notice">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Link>
              </li>
              <li>
                <Link to="review">
                  HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                  YOU?
                </Link>
              </li>
            </ol>
          </div>
          <div class="flex-child green">
            <img
              src="assets/img/privacy.jpg"
              alt="privacy-img"
              class="privacy-img"
            />
          </div>
        </div>
      </section>

      <section id="personal">
        <div class="section-title">
          <p class="ptitle">1. What information do we collect?</p>
        </div>
        <div>
          <p class="sub">
            <span class="concern">Personal information you disclose to us</span>
          </p>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>
          <p class="table-p">
            <em>
              <span>Personal information provided by you:</span>
            </em>
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            and the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul class="square">
            <li class="table-p">Names</li>
            <li class="table-p">Phone numbers</li>
            <li class="table-p">Email adresses</li>
            <li class="table-p">Mailing addresses</li>
            <li class="table-p">Usernames</li>
            <li class="table-p">Passwords</li>
          </ul>
          <p class="table-p">
            <em>
              <span>Sensitive Information:</span>
            </em>{" "}
            We do not process sensitive information.
          </p>
          <p class="table-p">
            <em>
              <span>Social Media Login Data: </span>
            </em>{" "}
            We may provide you with the option to register with us using your
            existing social media account details, like your Facebook, Twitter,
            or other social media account. If you choose to register in this
            way, we will collect the information described in the section called
            '<Link to="#keep">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link>'
            below.
          </p>
          <p class="table-p">
            {" "}
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>

          <p class="sub">
            <span class="concern">Information automatically collected</span>
          </p>
          <p class="table-p">
            <em>
              <span>In Short: </span>
            </em>
            Some information — such as your Internet Protocol (IP) address
            and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </p>
          <p class="table-p">
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>
          <p class="table-p">
            Like many businesses, we also collect information through cookies
            and similar technologies. The information we collect includes:
          </p>
          <ul class="square">
            <li class="table-p">
              <span class="underline">Log and Usage Data:</span> Log and usage
              data is service-related, diagnostic, usage, and performance
              information our servers automatically collect when you access or
              use our Services and which we record in log files. Depending on
              how you interact with us, this log data may include your IP
              address, device information, browser type, and settings and
              information about your activity in the Services (such as the
              date/time stamps associated with your usage, pages and files
              viewed, searches, and other actions you take such as which
              features you use), device event information (such as system
              activity, error reports (sometimes called 'crash dumps'), and
              hardware settings).
            </li>
          </ul>
        </div>
      </section>

      <section id="process">
        <div class="section-title">
          <p class="ptitle">2. How do we process your information?</p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent.
          </p>
          <p class="table-p">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <ul class="square">
            <li class="table-p">
              <span>
                To facilitate account creation and authentication and otherwise
                manage user accounts.
              </span>{" "}
              We may process your information so you can create and log in to
              your account, as well as keep your account in working order.
            </li>
            <li class="table-p">
              <span>To request feedback.</span> We may process your information
              when necessary to request feedback and to contact you about your
              use of our Services.
            </li>
            <li class="table-p">
              <span>To deliver targeted advertising to you.</span> We may
              process your information to develop and display personalised
              content and advertising tailored to your interests, location, and
              more.
            </li>
            <li class="table-p">
              <span>To post testimonials.</span> We post testimonials on our
              Services that may contain personal information.
            </li>
            <li class="table-p">
              <span>To identify usage trends.</span> We may process information
              about how you use our Services to better understand how they are
              being used so we can improve them.
            </li>
            <li class="table-p">
              <span>
                To determine the effectiveness of our marketing and promotional
                campaigns.
              </span>{" "}
              We may process your information to better understand how to
              provide marketing and promotional
            </li>
          </ul>
        </div>
      </section>

      <section id="share">
        <div class="section-title">
          <p class="ptitle">
            3. When and with whom do we share your personal information?
          </p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            We may share information in specific situations described in this
            section and/or with the following third parties.
          </p>
          <p class="table-p">
            We may need to share your personal information in the following
            situations:
          </p>
          <ul class="square">
            <li class="table-p">
              <span class="underline">Bussiness transfers:</span> We may share
              or transfer your information in connection with, or during
              negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business to another
              company.
            </li>
          </ul>
        </div>
      </section>

      <section id="cookies">
        <div class="section-title">
          <p class="ptitle">
            4. Do we use cookies and other tracking technologies?
          </p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            We may use cookies and other tracking technologies to collect and
            store your information.
          </p>
          <p class="table-p">
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice.
          </p>
        </div>
      </section>

      <section id="social">
        <div class="section-title">
          <p class="ptitle">5. How do we handle your Social Logins?</p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            If you choose to register or log in to our Services using a social
            media account, we may have access to certain information about you.
          </p>
          <p class="table-p">
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform.
          </p>
          <p class="table-p">
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </p>
        </div>
      </section>

      <section id="keep">
        <div class="section-title">
          <p class="ptitle">6. How long do we keep your information?</p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            We keep your information for as long as necessary to fulfil the
            purposes outlined in this privacy notice unless otherwise required
            by law.
          </p>
          <p class="table-p">
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
          </p>
          <p class="table-p">
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymise such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </div>
      </section>

      <section id="safe">
        <div class="section-title">
          <p class="ptitle">7. How do we keep your information safe?</p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            We aim to protect your personal information through a system of
            organisational and technical security measures.
          </p>
          <p class="table-p">
            We have implemented appropriate and reasonable technical and
            organisational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorised third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </div>
      </section>

      <section id="privacy-rights">
        <div class="section-title">
          <p class="ptitle">8. What are your Privacy Rights?</p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            You may review, change, or terminate your account at any time.
          </p>
          <p class="table-p">
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your
            <Link to="https://ec.europa.eu/newsroom/article29/items/612080">
              Member State data protection authority
            </Link>{" "}
            or{" "}
            <Link to="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
              UK data protection authority.
            </Link>
          </p>
          <p class="table-p">
            If you are located in Switzerland, you may contact the{" "}
            <Link to="https://www.edoeb.admin.ch/edoeb/en/home.html">
              {" "}
              Federal Data Protection and Information Commissioner.
            </Link>
          </p>
          <p class="table-p">
            <span class="underline">
              <em>Withdrawing your consent: </em>
            </span>
            If we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending
            on the applicable law, you have the right to withdraw your consent
            at any time. You can withdraw your consent at any time by contacting
            us by using the contact details provided in the section '
            <Link to="#notice">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>'
            below. However, please note that this will not affect the lawfulness
            of the processing before its withdrawal nor, when applicable law
            allows, will it affect the processing of your personal information
            conducted in reliance on lawful processing grounds other than
            consent.
          </p>
          <p class="table-p">
            <span class="underline">
              <em>Opting out of marketing and promotional communications:</em>
            </span>
            You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in
            the emails that we send, or by contacting us using the details
            provided in the section '
            <Link to="#notice">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>'
            below. You will then be removed from the marketing lists. However,
            we may still communicate with you — for example, to send you
            service-related messages that are necessary for the administration
            and use of your account, to respond to service requests, or for
            other non-marketing purposes.
          </p>
          <p class="sub">
            <span class="concern">Account information</span>
          </p>
          <p class="table-p">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <ul class="square">
            <li class="table-p">
              Log in to your account settings and update your user account.
            </li>
          </ul>
          <p class="table-p">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
          <p class="table-p">
            <span class="underline">
              <em>Cookies and similar technologies: </em>
            </span>
            Most Web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services of our
            Services. You may also{" "}
            <Link to="https://optout.aboutads.info/?c=2&lang=EN">
              opt out of interest-based advertising by advertisers
            </Link>{" "}
            on our Services.
          </p>
          <p class="table-p">
            If you have questions or comments about your privacy rights, you may
            email us at{" "}
            <Link to="mailto:oscode.community@gmail.com">
              oscode.community@gmail.com
            </Link>
          </p>
        </div>
      </section>

      <section id="controls">
        <div class="section-title">
          <p class="ptitle">9. Controls for Do-Not-Track features</p>
        </div>
        <div>
          <p class="table-p">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ( 'DNT' ) feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognising and
            implementing DNT signals has been finalised . As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </div>
      </section>

      <section id="california">
        <div class="section-title">
          <p class="ptitle">
            10. Do California residents have specific Privacy rights?
          </p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>{" "}
            Yes, if you are a resident of California, you are granted specific
            rights regarding access to your personal information.
          </p>
          <p class="table-p">
            California Civil Code Section 1798.83, also known as the 'Shine The
            Light' law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
          </p>
          <p class="table-p">
            If you are under 18 years of age, reside in California, and have a
            registered account with Services, you have the right to request
            removal of unwanted data that you publicly post on the Services. To
            request removal of such data, please contact us using the contact
            information provided below and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Services,
            but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g. backups, etc.).
          </p>
          <p class="sub">
            <span class="concern">CCPA Privacy Notice</span>
          </p>
          <p class="table-p">
            The California Code of Regulations defines a 'resident' as:
          </p>
          <ol>
            <li class="table-p">
              Every individual who is in the State of California for other than
              a temporary or transitory purpose and
            </li>
            <li class="table-p">
              Every individual who is domiciled in the State of California who
              is outside the State of California for a temporary or transitory
              purpose
            </li>
          </ol>
          <p class="table-p">
            All other individuals are defined as 'non-residents'.
          </p>
          <p class="table-p">
            If this definition of 'resident' applies to you, we must adhere to
            certain rights and obligations regarding your personal information.
          </p>
          <p class="table-p">
            <em>
              <span>
                What categories of personal information do we collect?
              </span>
            </em>
          </p>
          <p class="table-p">
            We have collected the following categories of personal information
            in the past twelve (12) months:
          </p>
          <table id="customers">
            <tr>
              <th>Categories</th>
              <th>Examples</th>
              <th>Collected</th>
            </tr>
            <tr>
              <td>A. Identifiers</td>
              <td>
                Contact details, such as real name, alias, postal address,
                telephone or mobile contact number, unique personal identifier,
                online identifier, Internet Protocol address, email address, and
                account name
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>
                B. Personal information categories listed in the California
                Customer Records statute
              </td>
              <td>
                Name, contact information, education, employment, employment
                history, and financial information
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>
                C. Protected classification characteristics under California or
                federal law
              </td>
              <td>Gender and date of birth</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>D. Commercial information</td>
              <td>
                Transaction information, purchase history, financial details,
                and payment information
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>E. Biometric information</td>
              <td>Fingerprints and voiceprints</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>F. Internet or other similar network activity</td>
              <td>
                Browsing history, search history, online behaviour , interest
                data, and interactions with our and other websites,
                applications, systems, and advertisements
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>G. Geolocation data</td>
              <td>Device location</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>
                H. Audio, electronic, visual, thermal, olfactory, or similar
                information
              </td>
              <td>
                Images and audio, video or call recordings created in connection
                with our business activities
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>I. Professional or employment-related information</td>
              <td>
                Business contact details in order to provide you our Services at
                a business level or job title, work history, and professional
                qualifications if you apply for a job with us
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>J. Education Information</td>
              <td>Student records and directory information</td>
              <td>NO</td>
            </tr>
            <tr>
              <td>K. Inferences drawn from other personal information</td>
              <td>
                Inferences drawn from any of the collected personal information
                listed above to create a profile or summary about, for example,
                an individual's preferences and characteristics
              </td>
              <td>NO</td>
            </tr>
            <tr>
              <td>L. Sensitive Personal Information</td>
              <td></td>
              <td>NO</td>
            </tr>
          </table>
          <p class="table-p">
            We may also collect other personal information outside of these
            categories through instances where you interact with us in person,
            online, or by phone or mail in the context of:
          </p>
          <ul class="square">
            <li class="table-p">
              Receiving help through our customer support channels;
            </li>
            <li class="table-p">
              Participation in customer surveys or contests; and
            </li>
            <li class="table-p">
              Facilitation in the delivery of our Services and to respond to
              your inquiries.
            </li>
          </ul>

          <p class="table-p">
            <em>
              <span>How do we use and share your personal information?</span>
            </em>
          </p>
          <p class="table-p">
            More information about our data collection and sharing practices can
            be found in this privacy notice .You may contact us by email at{" "}
            <Link to="mailto:oscode.community@gmail.com">
              oscode.community@gmail.com
            </Link>{" "}
            ,or by referring to the contact details at the bottom of this
            document.
          </p>
          <p class="table-p">
            If you are using an authorised agent to exercise your right to opt
            out we may deny a request if the authorised agent does not submit
            proof that they have been validly authorised to act on your behalf.
          </p>

          <p class="table-p">
            <em>
              <span>Will your information be shared with anyone else?</span>
            </em>
          </p>
          <p class="table-p">
            We may disclose your personal information with our service providers
            pursuant to a written contract between us and each service provider.
            Each service provider is a for-profit entity that processes the
            information on our behalf, following the same strict privacy
            protection obligations mandated by the CCPA. We may use your
            personal information for our own business purposes, such as for
            undertaking internal research for technological development and
            demonstration. This is not considered to be 'selling' of your
            personal information.
          </p>
          <p class="table-p">
            OSCode has not disclosed, sold, or shared any personal information
            to third parties for a business or commercial purpose in the
            preceding twelve (12) months. OSCode will not sell or share personal
            information in the future belonging to website visitors, users, and
            other consumers.
          </p>

          <p class="table-p">
            <em>
              <span>Your rights with respect to your personal data</span>
            </em>
          </p>
          <p class="table-p">
            <span class="underline">
              Right to request deletion of the data — Request to delete
            </span>
          </p>
          <p class="table-p">
            You can ask for the deletion of your personal information. If you
            ask us to delete your personal information, we will respect your
            request and delete your personal information, subject to certain
            exceptions provided by law, such as (but not limited to) the
            exercise by another consumer of his or her right to free speech, our
            compliance requirements resulting from a legal obligation, or any
            processing that may be required to protect against illegal
            activities.
          </p>
          <p class="table-p">
            <span class="underline">
              Right to be informed — Request to know
            </span>
          </p>
          <p class="table-p">
            Depending on the circumstances, you have a right to know:
            <ul class="square">
              <li class="table-p">
                whether we collect and use your personal information;
              </li>
              <li class="table-p">
                the categories of personal information that we collect;
              </li>
              <li class="table-p">
                the purposes for which the collected personal information is
                used;
              </li>
              <li class="table-p">
                whether we sell or share personal information to third parties;
              </li>
              <li class="table-p">
                the categories of personal information that we sold, shared, or
                disclosed for a business purpose;
              </li>
              <li class="table-p">
                the categories of third parties to whom the personal information
                was sold, shared, or disclosed for a business purpose;
              </li>
              <li class="table-p">
                the business or commercial purpose for collecting, selling, or
                sharing personal information; and
              </li>
              <li class="table-p">
                the specific pieces of personal information we collected about
                you.
              </li>
            </ul>
          </p>
          <p class="table-p">
            In accordance with applicable law, we are not obligated to provide
            or delete consumer information that is de-identified in response to
            a consumer request or to re-identify individual data to verify a
            consumer request.
          </p>
          <p class="table-p">
            <span class="underline">
              Right to Non-Discrimination for the Exercise of a Consumer's
              Privacy Rights
            </span>
          </p>
          <p class="table-p">
            We will not discriminate against you if you exercise your privacy
            rights.
          </p>
          <p class="table-p">
            <span class="underline">
              Right to Limit Use and Disclosure of Sensitive Personal
              Information
            </span>
          </p>
          <p class="table-p">
            We do not process consumer's sensitive personal information.
          </p>
          <p class="table-p">
            <span class="underline">Verification process</span>
          </p>
          <p class="table-p">
            Upon receiving your request, we will need to verify your identity to
            determine you are the same person about whom we have the information
            in our system. These verification efforts require us to ask you to
            provide information so that we can match it with information you
            have previously provided us. For instance, depending on the type of
            request you submit, we may ask you to provide certain information so
            that we can match the information you provide with the information
            we already have on file, or we may contact you through a
            communication method (e.g. phone or email) that you have previously
            provided to us. We may also use other verification methods as the
            circumstances dictate.
          </p>
          <p class="table-p">
            We will only use personal information provided in your request to
            verify your identity or authority to make the request. To the extent
            possible, we will avoid requesting additional information from you
            for the purposes of verification. However, if we cannot verify your
            identity from the information already maintained by us, we may
            request that you provide additional information for the purposes of
            verifying your identity and for security or fraud-prevention
            purposes. We will delete such additionally provided information as
            soon as we finish verifying you.
          </p>
          <p class="table-p">
            <span class="underline">Other privacy rights</span>
            <ul class="square">
              <li>
                You may object to the processing of your personal information.
              </li>
              <li>
                You may request correction of your personal data if it is
                incorrect or no longer relevant, or ask to restrict the
                processing of the information.
              </li>
              <li>
                You can designate an authorised agent to make a request under
                the CCPA on your behalf. We may deny a request from an
                authorised agent that does not submit proof that they have been
                validly authorised to act on your behalf in accordance with the
                CCPA.
              </li>
              <li>
                You may request to opt out from future selling or sharing of
                your personal information to third parties. Upon receiving an
                opt-out request, we will act upon the request as soon as
                feasibly possible, but no later than fifteen (15) days from the
                date of the request submission.
              </li>
            </ul>
          </p>
          <p class="table-p">
            To exercise these rights, you can contact us by email at
            oscode.community@gmail.com , or by referring to the contact details
            at the bottom of this document. If you have a complaint about how we
            handle your data, we would like to hear from you.
          </p>
        </div>
      </section>

      <section id="updates">
        <div class="section-title">
          <p class="ptitle">11. Do we make updates to this notice?</p>
        </div>
        <div>
          <p class="table-p">
            <em>
              <span>In Short:</span>
            </em>
            Yes, we will update this notice as necessary to stay compliant with
            relevant laws.
          </p>
          <p class="table-p">
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated 'Revised' date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </div>
      </section>

      <section id="notice">
        <div class="section-title">
          <p class="ptitle">12. How can you contact about this notice?</p>
        </div>
        <div>
          <p class="table-p">
            If you have questions or comments about this notice, you may email
            us at
            <Link to="mailto:oscode.community@gmail.com">
              oscode.community@gmail.com
            </Link>
            or by post to:
          </p>
          <p class="table-p">
            <span> OS-CODE headquarter</span>
            <br />
            Shanbough Krinshappa Ln, Upparahalli,
            <br />
            Mavalli, Bengaluru, Karnataka 560004
          </p>
        </div>
      </section>

      <section id="review">
        <div class="section-title">
          <p class="ptitle">
            13. How can you review, update or delete the data we collected from
            you?
          </p>
        </div>
        <div>
          <p class="table-p">
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please fill out and submit a
            <Link to="https://app.termly.io/notify/63ae55b1-c45a-461c-ae65-dcc6d1543a55">
              data subject access request.
            </Link>
          </p>
          <p class="table-p last">
            This privacy policy was created using Termly's{" "}
            <Link to="https://termly.io/products/privacy-policy-generator/">
              Privacy Policy Generator.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Policy;
