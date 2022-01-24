import {SET_USERS} from "../constants/user";

export function setUsers(users) {
    return {
        type: SET_USERS,
        payload: users,
    };
}