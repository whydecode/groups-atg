import React from "react";

const FacebookLoginButton = ({ onFacebookLogin }) => {
  const handleFacebookLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          const { accessToken } = response.authResponse;
          onFacebookLogin(accessToken);
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "email" }
    );
  };

  return <button onClick={handleFacebookLogin}>Login with Facebook</button>;
};

export default FacebookLoginButton;
