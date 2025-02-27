import React from "react";
import AddPropertyAdress from "../Elements/ManageRoom/AddProperty/AddPropertyAddress";
import AddPropertyName from "../Elements/ManageRoom/AddProperty/AddPropertyName";
import AddPropertyMap from "../Elements/ManageRoom/AddProperty/AddPropertyMap";

const Test = () => {
	return (
		<div className="flex flex-col">
			<div className="px-4 py-4">
				<AddPropertyName />
			</div>
			<div className="flex flex-row">
				<div className="px-4 py-4">
					<AddPropertyAdress />
				</div>
                <div>
                    
                </div>
			</div>
		</div>

		// <>
		// <AddPropertyAdress />
		// </>
	);
};

export default Test;
