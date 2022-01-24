import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import styles from "./profile.module.scss";

const Profile = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>Profile Page</h1>
                <Button type="button" onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </div>
        </div>
    );
};

export default Profile;