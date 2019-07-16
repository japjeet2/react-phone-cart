import React from "react";

const Default = props => {
  const goBack = props => {
    this.props.history.push("/");
  };
  return (
    <div>
      <h3>Page not Found</h3>
      <h4 onClick={goBack}>Redirect to Homepage</h4>
    </div>
  );
};

export default Default;
