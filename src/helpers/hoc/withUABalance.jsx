import React from "react";

export const withUABalance = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { balance } = props;
    const uaBalance = balance * 40;
    return <Component {...props} uaBalance={uaBalance} />;
  };
};
