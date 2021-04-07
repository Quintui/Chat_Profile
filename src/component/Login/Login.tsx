import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(loginAction())}>Login</button>
    </div>
  );
};

export default Login;
