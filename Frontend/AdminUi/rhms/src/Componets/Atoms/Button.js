import React from "react";

const buttonVariants = {
	primary: "bg-rmdGreen hover:bg-rmdYellow text-white",
	secondary: "bg-rmdYellow hover:bg-rmdGreen text-white",
	danger: "bg-red hover:bg-black text-white",
};

const Button = ({
	variant = {buttonVariants},
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
