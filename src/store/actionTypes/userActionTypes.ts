export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_FROM_TOKEN = "USER_FROM_TOKEN"
export const USER_LOGOUT = "USER_LOGOUT";

export type UserType = {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    password: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    friends: UserType[];
}

export interface userLoginStart {
  type: typeof USER_LOGIN_START
}

export interface userLoginFailed {
  type: typeof USER_LOGIN_FAILED,
  payload: any
}

export interface userLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS,
  payload: UserType
}

export interface userLogout {
    type: typeof USER_LOGOUT
}

export interface userFromToken {
    type: typeof USER_FROM_TOKEN,
    payload: UserType
}

export type UserDispatchTypes = userLoginStart | userLoginFailed | userLoginSuccess | userLogout | userFromToken 