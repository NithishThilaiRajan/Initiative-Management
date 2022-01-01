const initial_info = {
    id:0,
    name: "no_name",
    email: "no_email",
    loggedIn: false,
  };
  
  const userUpdate = (info = initial_info, action) => {
    switch (action.type) {
      case "UPDATE":
        return {
          ...info,
          id: action.id,
          name: action.name,
          email: action.email,
          loggedIn: action.loggedIn,
        };
      default:
        return info;
    }
  };
  
  export default userUpdate;
  