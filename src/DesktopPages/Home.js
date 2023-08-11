import React, { useState } from 'react'
import SideBar from '../componants/Sidebar'
import Nav from "../componants/Nav";
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';

import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

export const Home = () => {
    const [searchFlag, setSearchFlag] = useState(true);
    return (
        <div className='container-fluid'>
            <div className='row flex-nowrap'>
                <SideBar />
                <div className='col container' style={{ maxWidth: "80%" }}>
                    <Nav />

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "40px",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "70%",
                            }}
                        >
                            <div className='input-group mb-3'>
                                <input
                                    // value={searchId}
                                    // onChange={(e) => setSearchId(e.target.value)}
                                    style={{
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                        borderTopLeftRadius: "25px",
                                        borderBottomLeftRadius: "25px",
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by Id"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <div
                                    className='input-group-append'
                                // onClick={() => searchingById()}
                                >
                                    <span
                                        style={{
                                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                            cursor: "pointer",
                                            borderTopRightRadius: "25px",
                                            borderBottomRightRadius: "25px",
                                        }}
                                        className="input-group-text"
                                        id="basic-addon2"
                                    >
                                        <AiOutlineSearch />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            // onClick={() => navigate("/addproperty")}
                            className="btn btn-info"
                            style={{
                                fontSize: "larger",
                                display: "flex",
                                backgroundColor: "#6AB4F8",
                                alignItems: "center",
                                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.13)",
                                justifyContent: "center",
                                borderRadius: "35px",
                                border: "none"
                            }}
                        >

                            <span className="ms-1 d-none d-sm-inline">+ Add Property</span>
                        </button>
                    </div>
                    {searchFlag ? (
                        <>
                            <div
                                className='row'
                                style={{
                                    display: "flex",
                                    marginTop: "15px",
                                    justifyContent: "flex-end",
                                    paddingRight: "35px",

                                }}
                            >
                                <button
                                    type='button'
                                    // onClick={()=>clearData()}
                                    className="btn btn-info"
                                    style={{
                                        fontSize: "larger",
                                        display: "flex",
                                        color: "white",
                                        alignItems: "center",
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                        justifyContent: "center",
                                        borderRadius: "35px",
                                        backgroundColor: "#6AB4F8",
                                        border: "none",
                                    }}
                                >
                                    <MdOutlineClear />
                                    <span className="ms-1 d-none d-sm-inline">Clear</span>
                                </button>
                            </div>
                            {/* <Search values={values} /> */}
                        </>
                    ) : (
                        <>
                            {/* <Table /> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
