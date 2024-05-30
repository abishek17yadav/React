const heading= React.createElement("h1", {id:"heading"} ,"HEllo world");

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);



// how to create nested things in react core

const parent=React.createElement("div" , {id: "parent"} ,
React.createElement("div" , {id: "Child"},
React.createElement("h1" , {}, "Iam a h1 tag")
)

);

console.log(parent);

// const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// for multiple clild or siblings we make array in the 3rd arguments