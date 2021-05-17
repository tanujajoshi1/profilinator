import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h2>Made with ❤️ in India</h2>
            <div className = "more">
                <a href="#">Github</a>
                <a href="#">Fork</a>
                <a href="#">Issues</a>
                <a href="#">Pull Requests</a>
            </div>
            <p>Created in {year}</p>
        </footer>
    );
}

export default Footer;