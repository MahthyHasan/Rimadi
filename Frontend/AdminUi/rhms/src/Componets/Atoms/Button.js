import React from "react";

const buttonVariants = {
	primary: "bg-rmdGreen hover:bg-rmdYellow text-white",
	secondary: "bg-rmdYellow hover:bg-rmdGreen text-white",
	danger: "bg-red-500 hover:bg-red-600 text-white",
};

const Button = ({
	variant = "primary",
	children,
	className = "",
	...props
}) => {
	return (
		<button
			className={`px-4 py-2 rounded-md transition duration-300 ${buttonVariants[variant]} ${className}`}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
