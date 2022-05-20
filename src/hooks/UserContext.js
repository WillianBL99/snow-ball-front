import react from "react";

//como usar context -> const { setUser, url } = getContext();

//import persistUser from "../utils/persistUser";

const context = react.createContext();

export function Provider(props) {
    //const [user, setUser] = react.useState(persistUser);
    
  return (
    <context.Provider 
      value={{
        //user, setUser
      }}

    >{props.children}</context.Provider>
  );
}
export const getContext = () => react.useContext(context);