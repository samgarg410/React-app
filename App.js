console.log("hereeee")
const heading = React.createElement("h1", { id: "title" }, "Namaste Everyone");
const heading2 = React.createElement("h3", { id: "title" }, "Namaste Sam");
const dev=React.createElement("container",{id:"container"},[heading,heading2])
console.log(heading, "gggg")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(dev)