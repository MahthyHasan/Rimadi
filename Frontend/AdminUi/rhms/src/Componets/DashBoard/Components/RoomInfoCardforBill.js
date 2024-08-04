import React from "react";
import "./dashCom.css";
import RoomIconPath from "../../../assets/DashBoard/room.svg";

function RoomInfoCardforBill({ RoomNo, ClientName, Status }) {
	return (
		<div className="room-info-card-component">
			<div className="row">
				<div className="col-2 d-flex justify-content-center">
					<img className="room-icon-on-room-info-card" src={RoomIconPath} />
				</div>
				<div className="col-5">
                    <h5 className="room-info-card-text-room-no">Room No: {RoomNo}</h5>
                    <h6 className="room-info-card-text-client-name">{ClientName}</h6>
                </div>
				<div className="col-5">
                <h6 className="room-info-card-text-room-status">{Status}</h6>
                </div>
			</div>
		</div>
	);
}

export default RoomInfoCardforBill;
