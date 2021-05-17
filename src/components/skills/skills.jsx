import React from "react";
import Languages from "./languages";
import Frontend from "./frontend";
import Backend from "./backend";
import Mobile from "./mobile";
import AIML from "./ai_ml"

function Skills() {
    return (
        <div className = "skills">
            <h1>Skills</h1>
            <Languages />
            <Frontend />
            <Backend />
            <Mobile / >
            <AIML />
        </div>
    );
}

export default Skills;
