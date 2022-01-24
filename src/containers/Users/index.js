import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./users.module.scss";
import apiService from "../../services/apiService";
import {setUsers} from "../../store/actions/user";
import UserItem from "../../components/UserItem";
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        apiService
            .get("/", {params: {results: 25, nat: "TR"}})
            .then((res) => dispatch(setUsers(res.results)));
    }, [dispatch]);

    return (
        <div className={styles.page}>
            <h2>USER LIST</h2>
            <div className={styles.container}>
                {users.map((user) => (
                    <UserItem user={user}/>
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <Button type="button" onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </div>
        </div>
    );
};

export default Users;
