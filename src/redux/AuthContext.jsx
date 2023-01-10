import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState({});




//   return (
//     <AuthContext.Provider value={{  user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
