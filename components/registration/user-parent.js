import React from "react";
import UserLogin from "./user-login";
import UserRegister from "./user-register";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    };
  }
  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }
  changeState() {
    const { isLoginActive } = this.state;
    if (isLoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }));
  }
  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    return (
      <>
        <div className="form-page-parent">
          <div className="form-page-child">
            <div
              className="form-page-container"
              ref={(ref) => (this.container = ref)}
            >
              {isLoginActive && (
                <UserLogin containerRef={(ref) => (this.current = ref)} />
              )}
              {!isLoginActive && (
                <UserRegister containerRef={(ref) => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={(ref) => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
      </>
    );
  }
}
const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default Parent;
