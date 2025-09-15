import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="voicevaultUsers-container">
        <h1>Welcome to VoiceVault Help Landing Page</h1>
        <p>
          If you would like to delete your account, have any inquiries or more,
          please contact us at: <br />
          <a href="mailto:voicevaultcontact@gmail.com">
            VoiceVaultContact@gmail.com
          </a>
        </p>
        <h3>
          In your message, please include the email you use for your account on
          the app. If requesting to delete your account, upon deletion all of
          your data will be removed from our servers.
        </h3>
        {/* Privacy Policy Section */}
        <div className="privacy-policy">
          <h2>Privacy Policy for VoiceVault</h2>
          <p>
            <strong>Effective Date:</strong> January 29, 2025
          </p>
          <p>
            <strong>Last Updated:</strong> September 14, 2025
          </p>

          <p>
            Can1Cyp2 Apps ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how VoiceVault collects,
            stores, and processes your personal information in compliance with
            Google Play's policies, GDPR, and CCPA.
          </p>

          <h3>1. Information We Collect</h3>
          <h4>Account Information (Optional)</h4>
          <p>
            Users are not required to create an account to browse and search for
            songs. However, to access personalized features such as saving
            songs, creating lists, and adding songs, users must register an
            account. The following data is collected:
          </p>
          <ul>
            <li>
              <strong>Email Address:</strong> Required for authentication.
            </li>
            <li>
              <strong>Password:</strong> Securely encrypted and never stored in
              plain text.
            </li>
          </ul>
          <p>
            We do not collect personal identifiers such as names, phone numbers,
            or location data.
          </p>

          <h4>Automatically Collected Data</h4>
          <ul>
            <li>
              <strong>Anonymous Usage Data:</strong> We may collect aggregated
              data on app interactions to improve performance.
            </li>
            <li>
              <strong>Crash Reports & Logs:</strong> We use Supabase to manage
              our database but do not actively track user behavior.
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>
              ✅ Provide core app features (e.g., song searches, vocal range
              analysis).
            </li>
            <li>
              ✅ Allow users to save, manage, and organize personal song lists.
            </li>
            <li>✅ Enhance app security through encrypted authentication.</li>
            <li>✅ Respond to user inquiries and support requests.</li>
          </ul>
          <p>
            <strong>
              We do not sell, rent, or share user data with third parties.
            </strong>
          </p>

          <h3>3. Data Storage & Security</h3>
          <ul>
            <li>
              All user data is securely stored in Supabase, a cloud-based
              database provider.
            </li>
            <li>Passwords are hashed and encrypted before storage.</li>
            <li>
              We implement industry-standard security measures to prevent
              unauthorized access.
            </li>
            <li>
              Users may request account deletion at any time via email support
              (see Section 6).
            </li>
          </ul>

          <h3>4. Permissions & Third-Party Services</h3>
          <ul>
            <li>
              No special permissions (e.g., camera, microphone, location) are
              required by the core app.
            </li>
            <li>
              The app uses Supabase for data storage and authentication.
            </li>
            <li>
              This app includes third-party advertising services (Google
              AdMob) in app builds. While the developer does not directly
              collect gameplay data from this landing page, AdMob may collect
              or process device identifiers and usage signals to deliver and
              measure ads, perform analytics, and (if enabled) personalize
              ads.
            </li>
            <li>
              You can limit ad tracking on your device (for example, iOS:
              Settings → Privacy → Tracking). Developers may also configure
              AdMob to serve non-personalized ads only; consult Google
              AdMob's documentation for implementation details.
            </li>
          </ul>

          <h3>5. Children's Privacy</h3>
          <p>
            VoiceVault is not specifically targeted at children under 13, but it
            is safe for all audiences.
          </p>
          <p>
            We do not collect personal identifiers beyond an email and password
            (if users create an account).
          </p>
          <p>
            Parents can request account deletion or data access by contacting us
            (see Section 6).
          </p>

          <h3>6. User Rights & Account Deletion</h3>
          <p>Users have the right to:</p>
          <ul>
            <li>
              ✅ Modify account details (change password, update username).
            </li>
            <li>✅ Request data deletion at any time.</li>
            <li>✅ Request an export of their saved song lists.</li>
          </ul>
          <p>
            To delete an account or access stored data, users can email our
            support team at{" "}
            <a href="mailto:voicevaultcontact@gmail.com">
              voicevaultcontact@gmail.com
            </a>
            .
          </p>

          <h3>7. Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy to reflect changes in our app.
            Users will be notified of major changes through in-app notifications
            or updates on our website.
          </p>

          <h3>8. Contact Us</h3>
          <p>For questions, contact us at:</p>
          <p>
            📧{" "}
            <a href="mailto:voicevaultcontact@gmail.com">
              voicevaultcontact@gmail.com
            </a>
          </p>

          <p>
            This Privacy Policy ensures Google Play Store compliance while
            maintaining transparency on data usage. 🚀
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
