import React from "react";
import Languages from "./languages";
import Frontend from "./frontend";
import Backend from "./backend";
import Mobile from "./mobile";
import AIML from "./ai_ml";
import Database from "./database";
import DataVisualization from "./data_visualization";
import Automation from "./automation";
import Other from "./other";
import Devops from "./devops";
import Baas from "./baas";
import Framework from "./framework";
import GameEngine from "./game";
import Testing from "./testing";
import Software from "./software";

function Skills() {
    return (
        <div className = "skills">
            <h1>Skills</h1>
            <Languages />
            <Frontend />
            <Backend />
            <Mobile / >
            <AIML />
            <Database />
            <DataVisualization />
            <Devops />
            <Baas />
            <Framework />
            <GameEngine />
            <Testing />
            <Software />
            <Automation />
            <Other />
        </div>
    );
}

export default Skills;
