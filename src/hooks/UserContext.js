import react from "react";

//como usar context -> const { user, url } = getContext();

import persistUser from "../utils/persistUser";

const context = react.createContext();

export function Provider(props) {
    const [user, setUser] = react.useState(persistUser);
    let url="http://localhost:5000/";
    
  return (
    <context.Provider 
      value={{
        url,
        user, setUser
      }}

    >{props.children}</context.Provider>
  );
}
export const getContext = () => react.useContext(context);