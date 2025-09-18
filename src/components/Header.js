import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
export const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    console.log("Header render");

    //if no dependency array => useEffect is called on every render of the component
    // if the dependency array is empty => useEffect is called only on the initial render of the component
    // if the dependecy array is [btnNameReact] => useEffect is called whenver btnNameReact is updated.
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login"
                                ? setbtnNameReact("logout")
                                : setbtnNameReact("Login");
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
