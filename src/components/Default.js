import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              the requested URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

// import React from "react";

// const Default = props => {
//   const goBack = props => {
//     this.props.history.push("/");
//   };
//   return (
//     <div>
//       <h3>Page not Found</h3>
//       <h4 onClick={goBack}>Redirect to Homepage</h4>
//     </div>
//   );
// };

// export default Default;
