import React from "react";

const Button = ({children,
  variant = "primary",
  onClick = "clickHandler",
  ...props
}) => {
 
  return (
    <button 
     className={`btn btn-${variant}`}
    >
      {children}
    </button>
  )
}

export default Button