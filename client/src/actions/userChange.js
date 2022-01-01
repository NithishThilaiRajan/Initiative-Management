const userInfo = (userId, userName, userEmail, loggedIn) => {
    return {
      type: "UPDATE",
      id:userId,
      name: userName,
      email: userEmail,
      loggedIn: loggedIn,
    };
  };
  
  export default userInfo;
  