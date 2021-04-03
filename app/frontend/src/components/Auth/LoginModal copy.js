import React from "react";
import ReactModalLogin from "react-modal-login";

import { facebookConfig, googleConfig } from "./social-config";

// class Sample extends React.Component {
//   constructor(props) {
//     super(props);

//     this.modalState = {
//       showModal: false,
//       loading: false,
//       error: null
//     };
//   }

//   openModal() {
//     this.setState({
//       showModal: true
//     });
//   }

//   closeModal() {
//     this.setState({
//       showModal: false,
//       error: null
//     });
//   }

//   onLoginSuccess(method, response) {
//     console.log("logged successfully with " + method);
//   }

//   onLoginFail(method, response) {
//     console.log("logging failed with " + method);
//     this.setState({
//       error: response
//     });
//   }

//   startLoading() {
//     this.setState({
//       loading: true
//     });
//   }

//   finishLoading() {
//     this.setState({
//       loading: false
//     });
//   }

//   afterTabsChange() {
//     this.setState({
//       error: null
//     });
//   }

//   render() {

const LoginModal = ({
  openModal,
  closeModal,
  startLoading,
  finishLoading,
  afterTabsChange,
  onLoginFail,
  onLoginSuccess,
  modalState,
}) => {
  return (
    <div>
      <ReactModalLogin
        visible={modalState.showModal}
        onCloseModal={closeModal}
        loading={modalState.loading}
        error={modalState.error}
        tabs={{
          afterChange: { afterTabsChange },
        }}
        loginError={{
          label: "Couldn't sign in, please try again.",
        }}
        registerError={{
          label: "Couldn't sign up, please try again.",
        }}
        startLoading={startLoading}
        finishLoading={finishLoading}
        providers={{
          // facebook: {
          //   config: facebookConfig,
          //   onLoginSuccess: { onLoginSuccess },
          //   onLoginFail: { onLoginFail },
          //   label: "Continue with Facebook",
          // },
          google: {
            config: googleConfig,
            onLoginSuccess: { onLoginSuccess },
            onSuccess: { onLoginSuccess },
            onLoginFail: { onLoginFail },
            label: "Continue with Google",
          },
        }}
      />
    </div>
  );
};

export default LoginModal;
