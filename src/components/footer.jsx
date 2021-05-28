import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h2>Made with ❤️ in India</h2>
            <div className = "more">
                <a href="https://github.com/tanujajoshi1/profilinator">Github</a>
                <a href="https://github.com/tanujajoshi1/profilinator/fork">Fork</a>
                <a href="https://github.com/tanujajoshi1/profilinator/issues">Issues</a>
                <a href="https://github.com/tanujajoshi1/profilinator/pulls">Pull Requests</a>
            </div>
            <p>Created in {year}</p>
        </footer>
    );
}

export default Footer;