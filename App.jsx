import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import IPhone148 from "./components/IPhone148";
import IPhone141 from "./components/IPhone141";
import IPhone147 from "./components/IPhone147";
import IPhone142 from "./components/IPhone142";
import IPhone145 from "./components/IPhone145";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/iphone-14-8">
          <IPhone148 {...iPhone148Data} />
        </Route>
        <Route path="/:path(|iphone-14-1)">
          <IPhone141
            rectangle18034="/img/rectangle-18034.png"
            x1062871271575949852222Gettyimages1="/img/106287127-1575949852222gettyimages-149814787-02-1@2x.png"
          />
        </Route>
        <Route path="/iphone-14-7">
          <IPhone147 {...iPhone147Data} />
        </Route>
        <Route path="/iphone-14-2">
          <IPhone142 {...iPhone142Data} />
        </Route>
        <Route path="/iphone-14-5">
          <IPhone145
            overlapGroup1="/img/group-2203@2x.png"
            title="Artifacts"
            overlapGroup="/img/group-2203-1@2x.png"
            artifacts="Artifacts"
            scanAnyArtifactsAroundYou="scan any artifacts around you"
            group2196="/img/group-2196@2x.png"
            group2283Props={iPhone145Data.group2283Props}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group22831Data = {
    src: "/img/group-36@2x.png",
};

const iPhone148Data = {
    overlapGroup1: "/img/group-2203@2x.png",
    title: "Artifacts",
    overlapGroup: "/img/group-2203-1@2x.png",
    artifacts: "Artifacts",
    artifactName: "Artifact Name :",
    description: "Description :",
    inputType1: "text",
    inputPlaceholder1: ".................................................................................................................",
    inputType2: "text",
    inputPlaceholder2: <React.Fragment>.................................................................................................................<br />.................................................................................................................<br />.................................................................................................................</React.Fragment>,
    group2196: "/img/group-2196@2x.png",
    group2283Props: group22831Data,
};

const group22832Data = {
    src: "/img/group-36@2x.png",
};

const iPhone147Data = {
    overlapGroup2: "/img/group-2203@2x.png",
    title: "Artifacts",
    overlapGroup: "/img/group-2203-1@2x.png",
    artifacts: "Artifacts",
    scanAnyArtifactsAroundYou: "scan any artifacts around you",
    doYouWantToAddIt: "Do you want to add it?",
    close: "close",
    add: "add",
    unknownArtifact: "Unknown Artifact",
    group2196: "/img/group-2196@2x.png",
    group2283Props: group22832Data,
};

const group22823Data = {
    className: "group-2279",
};

const group22833Data = {
    src: "/img/group-36-2.svg",
    className: "group-2280",
};

const iPhone142Data = {
    overlapGroup11: "/img/group-2203-4@2x.png",
    title: "Artifacts",
    overlapGroup: "/img/group-2203-5@2x.png",
    explore: "Explore",
    maskGroup1: "/img/mask-group-14@2x.png",
    diriyah: "Diriyah",
    riyadhProvince: "Riyadh Province",
    vector2: "/img/vector-22@2x.png",
    text1: "4.6",
    search: "Search",
    sights: "Sights",
    tour: "Tour",
    adventure: "Adventure",
    maskGroup2: "/img/mask-group-18@2x.png",
    discoverAlula: "Discover ALUla",
    surname: "Medina province",
    text2: "4.6",
    tourGuides: "Tour guides",
    seeAll: "See all",
    maskGroup3: "/img/mask-group-15@2x.png",
    name1: "Ahmad M.",
    maskGroup4: "/img/mask-group-16@2x.png",
    lamaA: "Lama A.",
    maskGroup5: "/img/mask-group-17@2x.png",
    name2: "Omar R.",
    letsMakeAiGenera: "Let’s make AI generate your tour plan for today",
    inputType: "text",
    inputPlaceholder: "Enter the city you’re in",
    group2282Props: group22823Data,
    group2283Props: group22833Data,
};

const group22834Data = {
    src: "/img/group-36@2x.png",
};

const iPhone145Data = {
    overlapGroup1: "/img/group-2203@2x.png",
    title: "Artifacts",
    overlapGroup: "/img/group-2203-1@2x.png",
    artifacts: "Artifacts",
    scanAnyArtifactsAroundYou: "scan any artifacts around you",
    group2196: "/img/group-2196@2x.png",
    group2283Props: group22834Data,
};

