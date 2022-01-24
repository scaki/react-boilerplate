import React from "react";
import PropTypes from "prop-types";
import styles from "./userItem.module.scss";

const UserItem = (props) => {
  const { user } = props;
  return (
    <div className={styles.userItem}>
      <div className={styles.avatar}>
        <img
          src={user.picture.thumbnail}
          alt={`${user.name.first} ${user.name.last}`}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          {`${user.name.first} ${user.name.last}`}
        </div>
        <div className={styles.email}>{user.email}</div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};

export default UserItem;
