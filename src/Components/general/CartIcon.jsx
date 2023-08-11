import React, {  useContext } from "react";
import { Link } from 'react-router-dom';
import { modoContext } from "../../Context/modoContext";

const CartIcon = ({ children }) => {
  const { cartItems } = useContext(modoContext);

  const cartItemCount =  4//  cartItems.quantity; 
  return (
    <div className="relative inline-block">
      <Link
        to="/checkout"
        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        🛒
      </Link>
      {cartItemCount > 0 && (
        <div className="absolute button-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
          {cartItemCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
