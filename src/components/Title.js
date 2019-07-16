import React from "react";

export default function Title(props) {
  const { name, title } = props;
  return (
    <div className="row m-0">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capatailize font-weight-bold">
          {name}{" "}
          <span className="text-blue">{title}</span>
        </h1>
      </div>
    </div>
  );
}
