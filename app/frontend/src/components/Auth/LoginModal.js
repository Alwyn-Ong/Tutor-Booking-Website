import { Button } from "@material-ui/core";
import React from "react";
import toast from "react-hot-toast";
import ReactModalLogin from "react-modal-login";

import { facebookConfig, googleConfig } from "./social-config";

import { connect } from "react-redux";
import { updateLogin } from "../../actions/authActions";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loading: false,
      error: false,
      // showModal: this.props.modalState.showModal,
      // loading: this.props.modalState.loading,
      // error: this.props.modalState.error,
      updateLogin: updateLogin()
    };
  }

  openModal() {
    this.setState({
      showModal: true,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null,
    });
  }

  onLoginSuccess(method, response) {
    console.log(response);
    console.log("logged successfully with " + method);
    let tokenId = response.id_token;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", tokenId);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/verifytoken/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Add to redux
        updateLogin(result.name, result.userid, result.role);

        toast.success(`Welcome ${result.name}`);
        let role = result.isTutor ? "TUTOR" : "TUTEE"

        // TODO add token if doing calendar api
        this.props.updateLogin(result.name,result.userid,role);
        this.finishLoading();
        this.closeModal();
      })
      .catch((error) => console.log("error", error));
  }

  // toast.success("Login success!");

  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response,
    });
  }

  startLoading() {
    this.setState({
      loading: true,
    });
  }

  finishLoading() {
    this.setState({
      loading: false,
    });
  }

  afterTabsChange() {
    this.setState({
      error: null,
    });
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => this.openModal()}>Open Modal</button> */}
        {/* <Button variant="contained" onClick={() => this.openModal()}>
          Send Request
        </Button> */}
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this),
          }}
          loginError={{
            label: "Couldn't sign in, please try again.",
          }}
          registerError={{
            label: "Couldn't sign up, please try again.",
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            // facebook: {
            //   config: facebookConfig,
            //   onLoginSuccess: this.onLoginSuccess.bind(this),
            //   onLoginFail: this.onLoginFail.bind(this),
            //   label: "Continue with Facebook",
            // },
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google",
            },
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLogin: (name, userid, role) =>
      dispatch(
        updateLogin(name, userid, role)
      ),
  };
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  LoginModal
);
// export default LoginModal;
