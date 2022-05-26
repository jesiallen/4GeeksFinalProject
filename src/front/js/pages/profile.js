import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    let accountUser = store.accountUser.find(element => {
        return element.id == props.match.params.id;
    });
    const [userType, setuserType] = useState("professional")

    const userInfo = {
        id: "1",
        profilePicture: accountUser.profilePicture,
        name: accountUser.name,
        phone: accountUser.phone,
        email: accountUser.email,
        background: accountUser.background,
        about: accountUser.about,
        services: accountUser.services,
        availability: accountUser.availability,
        userType: accountUser.userType
    }

    return (

        <div className="container">
            {/*------------------ Pro user view-------------------------------- */}

            <div className="container-box">
                <div className="userInfo">
                    <div className="userCard d-flex">
                        <img className="img-fluid profilePicture" src="https://static.wixstatic.com/media/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg/v1/fill/w_514,h_596,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0ac2e0_85c483d6fa614881a0e543bfe367336a~mv2.jpg" />
                        <div className="professionalCard">
                            <div className="userInfo d-flex">
                                <div>
                                    <div className="Name">{userInfo.name}</div>
                                    <div className="email"><i className="fas fa-envelope"></i>{userInfo.email}</div>
                                    <div className="phone"><i className="fas fa-phone"></i>{userInfo.phone}</div>
                                    <div className="background"><i className="fas fa-school"></i>{userInfo.background}</div>
                                </div>
                                <div className="userRating">*****</div>
                            </div>
                            <div className="aboutCard">
                                <div className="aboutTitle">about Title</div>
                                <div className="aboutText">{userInfo.about}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicesCard">
                    <div className="services">Services</div>
                    <div>Math</div>
                </div>
                <div className="availabilityCard">
                    <div className="availability">availability</div>
                    <div>M-F 9-5</div>
                </div>
                {userType == "professional" ? (
                    <div>
                        {/*------------------ Pro user modal-------------------------------- */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Edit profile
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            {/*<div>
                                                <label htmlFor="exampleFormControlFile1">Profile picture</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1" accept=".jpg, .jpeg, .png" onChange={e => {
                                                    setModalInfo({ ...modalInfo, profilePicture: e.target.result });
                                                }} />
                                            </div>*/}
                                            <div>
                                                <div
                                                    class="modal fade"
                                                    id="exampleModal"
                                                    tabindex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">
                                                                    Send my contact info
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    class="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <form>
                                                                    <div class="mb-3">
                                                                        <label
                                                                            for="recipient-name"
                                                                            class="col-form-label">
                                                                            Enter Email:
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            class="form-control"
                                                                            id="recipient-name"
                                                                        />
                                                                    </div>
                                                                    <div class="mb-3">
                                                                        <label
                                                                            for="message-text"
                                                                            class="col-form-label">
                                                                            Enter Phone number:
                                                                        </label>
                                                                        <textarea
                                                                            class="form-control"
                                                                            id="message-text"></textarea>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    class="btn btn-secondary"
                                                                    data-bs-dismiss="modal">
                                                                    Close
                                                                </button>
                                                                <button type="button" class="btn btn-primary">
                                                                    Send message
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>Services</div>
                                            <div>availability</div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={(e) => { actions.editUserInfo(modalInfo), console.log(store.accountUser) }}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Contact me
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

Profile.propTypes = {
    match: PropTypes.object
};