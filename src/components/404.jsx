import react from "react";
import logo from "../logo.png";

function Error() {
    return (
        <div className = "error">
            <img className = "logo" src = {logo} />
            <h4>OH NO! Error 404</h4>
            <h5>Bigfoot doesn't allow direct access to this page.</h5>
            <h5>Comeback to homepage.</h5>
        </div>
    );
}

export default Error;