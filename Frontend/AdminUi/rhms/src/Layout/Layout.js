import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../redux/actions";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import logoPath from "../assets/Layout/logo.png";
import DashboardIcon from "../assets/Layout/dasbordIcon.svg";
import ManageRoomIcon from "../assets/Layout/roomIcon.svg";
import ManageBookingIcon from "../assets/Layout/bookingIcon.svg";
import MangeEmployeeIcon from "../assets/Layout/employeeIcon.svg";
import ReportIcon from "../assets/Layout/reportIcon.svg";
import PromotionIcon from "../assets/Layout/promotionIcon.svg";
import NotificationIcon from "../assets/Layout/notificationIcon.svg";
import SettingIcon from "../assets/Layout/settingIcon.svg";
import PlusIcon from "../assets/Layout/plusIcon.svg";
import ProfileImage from "../assets/Layout/profile.png"

function Layout({ children }) {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const open = useSelector((state) => state.setting.toggle);
	const [modalType, setModalType] = useState("view");
	const [modalShow, setModalShow] = useState(false);
	const [modalData, setModalData] = useState(false);
	const [user, setUser] = useState(null);

	function toggleDrawer() {
		dispatch(changeToggle(!open));
	}
	const [activeLink, setActiveLink] = useState(null);

	const [profilePopupShow, setProfilePopupShow] = useState(false);

	const handleProfileClick = () => {
		setProfilePopupShow(!profilePopupShow);
	};

	const navigate = useNavigate();

	return (
		<>
			<div className="container-fluid">
				<div className="row flex-nowrap">
					<div
						className={
							(!open ? " col-xl-3" : " w-100px") +
							(!show ? " mobile-navbar-hide " : " mobile-show ") +
							" col-auto col-md-1 px-0 side-bg-color border-right min-vh-100 trans"
						}>
						<div className="Logo-Container">
							<img
								src={logoPath}
								className={open ? "hide-logo" : "logo-rimadi"}
							/>
						</div>

						<div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 nav-link-text-color pt-4">
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active "
											: "side-menu-item "
									}
									to={"/dashboard"}>
									<div className={"d-flex"}>
										<img
											src={DashboardIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={"trans-1"}>Dashboard</div>}
									</div>
								</NavLink>
							</div>

							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/DrugsDoctorPage"}>
									<div className={"d-flex"}>
										<img
											src={ManageRoomIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Manage Rooms</div>}
									</div>
								</NavLink>
							</div>
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/Analysis"}>
									<div className={"d-flex"}>
										<img
											src={ManageBookingIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Manage Booking</div>}
									</div>
								</NavLink>
							</div>
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/Chat"}>
									<div className={"d-flex"}>
										<img
											src={MangeEmployeeIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Manage Employee</div>}
									</div>
								</NavLink>
							</div>
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/Chat"}>
									<div className={"d-flex"}>
										<img
											src={ReportIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Report</div>}
									</div>
								</NavLink>
							</div>
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/Chat"}>
									<div className={"d-flex"}>
										<img
											src={PromotionIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Promotion</div>}
									</div>
								</NavLink>
							</div>
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/Chat"}>
									<div className={"d-flex"}>
										<img
											src={NotificationIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Notification</div>}
									</div>
								</NavLink>
							</div>
							<div className={"w-100 px-sm-2"}>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "side-menu-item side-menu-active"
											: "side-menu-item"
									}
									to={"/Chat"}>
									<div className={"d-flex"}>
										<img
											src={SettingIcon}
											alt="avatar"
											height="24px"
											width="26.4px"
											className=" sid-tab-menu-icons me-2"
										/>
										{!open && <div className={""}>Setting</div>}
									</div>
								</NavLink>
							</div>
						</div>
						<div className="accounts-container">
							<div className="row">
								<div className="col-6 accounts-Heading-text-div">
									<p className="accounts-Heading-text">Accounts</p>
								</div>
								<div className="col-6 plus-icon-div-accounts">
									<img
										src={PlusIcon}
										alt="avatar"
										height="17.839px"
										width="17.815px"
										className="plus-icon-accounts"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col p-0">
						<nav className="navbar navbar-expand-lg bg-white border-bottom-d1d1d1 px-4">
            <div className="col-4">
									<div className="container-fluid nav-iconset flex-nowrap">
										<button
											className="navbar-toggler "
											type="button"
											onClick={() => setShow(!show)}>
											<span className="navbar-toggler-icon"></span>
										</button>
									</div>
									<div>
										<p className="Resturent-title">Rimadi Lake Resturent</p>
									</div>
								</div>
								<div className="col-6">
                <div className="row "><p className="date-time-in-nav-bar text-center">12 May 2024</p></div>
                <div className="row "><p className="date-time-in-nav-bar text-center"> 8:00 Am</p></div>
                </div>
								<div className="col-2">
                <div className="collapse navbar-collapse " id="">
                <ul className="navbar-nav ms-auto align-items-center flex-row">
                  <Dropdown className="bg-white">
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                      <div
                        className="d-flex align-items-center icon-hover rounded"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                         <img
                          src={ProfileImage}
                          alt="avatar"
                          height="38px"
                          width="38px"
                          className="rounded-circle me-2"
                        /> 
                        <p className="mb-0 text-dark">Cader Mohamed</p>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="p-3 text-left">
                        <p>Cader  Mohamed</p>
                        <p>cadmod@gmail.com</p>

                        <button
                          type="button"
                          className={
                            "btn btn-primary tasks-dropdown-btn padding-none d-flex align-items"
                          }
                          onClick={() => {
                            setModalType("Edit");
                            setModalShow(true);
                          }}
                        >
                          Profile Edit
                        </button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
                </div>
						</nav>
						<div>
							<div />
							{children}
						</div>
					</div>
				</div>
				{/* <EditProfile
        show={modalShow}
        type={modalType}
        onHide={() => {
          setModalShow(false);
        }}
        modelData={modalData}
      /> */}
			</div>
		</>
	);
}

export default Layout;
