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
      </div>
    </>
  );
};

export default App;
