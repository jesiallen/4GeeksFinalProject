import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ClientAppointments = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");

    let appointments = store.clientAppointments.filter(
        (elm) => !(elm.paid || elm.cancelled)
    );
    let paidAppointments = store.calendarEntries.filter((elm) => elm.paid);
    let cancelledCalendarEntries = store.calendarEntries.filter(
        (elm) => elm.cancelled
    );


    let mappedAppointments = appointments.map((appt, index) => {
        return (
            <li
                className="list-group-item d-flex justify-content-between"
                key={index}
            >
                <div>
                    <div>{appt.text} </div>
                    <div>{appt.description} </div>
                    <div>Start time : {appt.startDate.toString()}</div>
                </div>
                <div>
                    <div className="d-flex">
                        <h4>status: </h4> <h4>payment due</h4>
                    </div>
                    {appt.completed ? (
                        <>
                            <button
                                type="button"
                                className="btn btn-success mx-1"
                                onClick={(e) => {
                                    actions.editCalendarEntry(appt.text, "completed");
                                }}
                            >
                                Completed
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-warning mx-1"
                                onClick={(e) => {
                                    actions.editCalendarEntry(appt.text, "paid");
                                    actions.editUserStats(appt.startDate, "completed");
                                }}
                            >
                                Pay
                            </button>
                        </>
                    ) : (
                        <>
                            {appt.toConfirm ? <button className="btn btn-success mx-1" disabled >pending confirmation</button> : <button
                                type="button"
                                onClick={(e) => {
                                    actions.editCalendarEntry(appt.text, "completed"),
                                        appt.toConfirm = "completed"
                                }}
                                className="btn btn-outline-warning mx-1"
                            >
                                Pay appointment
                            </button>}

                        </>
                    )}
                </div>
            </li>
        );
    });

    let mappedPaidAppointments = paidAppointments.map((appt, index) => {
        return (
            <li
                className="list-group-item d-flex justify-content-between"
                key={index}
            >
                <div>
                    <div>{appt.text} </div>
                    <div>{appt.description} </div>
                    <div>Start time : {appt.startDate.toString()}</div>
                </div>
                <div>
                    <button type="button" className="btn btn-success" disabled>
                        Paid!
                    </button>
                </div>
            </li>
        );
    });

    let mappedCancelledAppointments = cancelledCalendarEntries.map(
        (appt, index) => {
            return (
                <li
                    className={appt.completed ? "btn btn-success mx-1" : "btn btn-outline-warning mx-1"}

                    key={index}
                >
                    <div>
                        <div>{appt.text} </div>
                        <div>{appt.description} </div>
                        <div>Start time : {appt.startDate.toString()}</div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-danger" disabled>
                            Cancelled
                        </button>
                    </div>
                </li>
            );
        }
    );


    return (
        <div className="container-fluid">
            <div className="mainBox">
                <div className="inputDiv">
                    <h3>Appointments</h3>
                </div>
                <br></br>
                <div className="inputDiv">
                    <div>
                        <h3>Scheduled appointments</h3>
                    </div>
                    <ul className="list-group">
                        {mappedAppointments.length == 0 ? (
                            <div className="list-group-item">
                                <span>There are no pending appointments</span>
                            </div>
                        ) : (
                            mappedAppointments
                        )}
                    </ul>
                </div>
                <br></br>
                <div className="inputDiv">
                    <div>
                        <h3>Confirmed appointments</h3>
                    </div>
                    <ul className="list-group">{mappedPaidAppointments}</ul>
                </div>
            </div>
        </div>
    );
};