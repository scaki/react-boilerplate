import React from "react";
import {Link} from "react-router-dom";
import logo from "./logo.svg";
import styles from "./home.module.scss";

const Home = () => {
    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to="/profile" className={styles.appLink}>Profile</Link>
                <Link to="/users" className={styles.appLink}>Users</Link>
                <a
                    className={styles.appLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default Home;