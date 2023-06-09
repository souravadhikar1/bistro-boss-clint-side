// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import useAxiosSecure from "./useAxiousSecure";
// import useAuth from "./useAuth";

// const useCart = () => {
//   const { user } = useContext(AuthContext);

//   // const token = localStorage.getItem("access-token");

//   const { refetch, data: cart = [] } = useQuery({
//     queryKey: ["carts", user?.email],
//     // queryFn: async () => {
//     //   const res = await fetch(
//     //     `http://localhost:5000/carts?email=${user?.email}`,
//     //     {
//     //       headers: {
//     //         authorization: `bearer ${token}`,
//     //       },
//     //     }
//     //   );
//     //   return res.json();
//     // },

//     queryFn: async () => {
//       const res = await useAxiosSecure(`/carts?email=${user?.email}`);
//       console.log("res from axios", res);
//       return res.data;
//     },
//   });
//   return [cart, refetch];
// };

// export default useCart;

import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import useAuth from "./useAuth";
const useCart = () => {
  // const { user, loading } = useContext(AuthContext);
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
    //         authorization: `bearer ${token}`
    //     }})
    //     return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};
export default useCart;
