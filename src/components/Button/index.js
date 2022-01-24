import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = (props) => {
  const { type, onClick, children } = props;
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
