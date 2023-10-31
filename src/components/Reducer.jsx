import React, { useReducer } from "react";

// const myReducer = (prevState, action) => {
//   let array;
//   switch (action.type) {
//     case "ADD":
//       array = [...prevState];
//       array.push(action.payload);
//       return array;
//     case "REMOVE":
//       array = [...prevState];
//       array.pop();
//       return array;
//     case "CLEAR":
//       return (prevState = []);
//     default:
//       break;
//   }
// };

async function loginHelper({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

const myReducer = (prevState, action) => {
  switch (action.type) {
    case "USERNAME":
      return {
        ...prevState,
        username: action.payload,
      };
    case "PASSWORD":
      return {
        ...prevState,
        password: action.payload,
      };
    case "IS_LOADING":
      return {
        ...prevState,
        isLoading: true,
      };
    case "IS_NOT_LOADING":
      return {
        ...prevState,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...prevState,
        isError: true,
        isLoading: false,
      };
    default:
      break;
  }
};

const initialState = {
  username: "",
  password: "",
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

export default function Reducer() {
  const [state, dispatcher] = useReducer(myReducer, initialState);
  console.log(state);

  // Three different state triggers
  //   const addHandler = () => {
  //     dispatcher({ type: "ADD", payload: Math.round(Math.random() * 100 + 100) });
  //   };
  //   const removeHandler = () => {
  //     dispatcher({ type: "REMOVE" });
  //   };
  //   const clearHandler = () => {
  //     dispatcher({ type: "CLEAR" });
  //   };

  const usernameHandler = (e) => {
    dispatcher({ type: "USERNAME", payload: e.target.value });
  };
  const passwordHandler = (e) => {
    dispatcher({ type: "PASSWORD", payload: e.target.value });
  };

  const logoutHandler = (e) => {
    dispatcher({ type: "LOGGED_OUT" });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Check credentials (simulated)
    try {
      dispatcher({ type: "IS_LOADING" });
      await loginHelper({ username: state.username, password: state.password });
      dispatcher({ type: "IS_NOT_LOADING" });
      dispatcher({ type: "LOGGED_IN" });
    } catch {
      dispatcher({ type: "ERROR" });
      alert("Incorrect username or password");
    }
  };

  return (
    <div>
      <h3>2.Modify complex states, such as arrays or objects: login form</h3>
      <div
        style={{
          maxWidth: "50%",
          backgroundColor: "#a8dadc",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        {state.isLoggedIn ? (
          <>
            <p>Welcome!</p>
            <button onClick={logoutHandler}>Log out!</button>
          </>
        ) : (
          <form onSubmit={submitHandler}>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={usernameHandler}
                value={state.username}
                style={{ margin: "0 1rem" }}
                placeholder="user"
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordHandler}
                value={state.password}
                style={{ margin: "0 1rem" }}
                placeholder="password"
              />
            </div>
            <div style={{ margin: "1rem 0" }}>
              <button type="submit" disabled={state.isLoading}>
                {state.isLoading ? "Logging you in..." : "Log in"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
