/*
 * 
 * <div id="parent">
 *      <div class="child1">
 *          child1
 *      </div>
 *      <div class="child2">
 *          child2
 *      </div>
 * </div>
  
 */

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {className: "child1"}, "child1"), 
        React.createElement("div", {className: "child2"}, "child2")
    ] )
const heading = React.createElement("h1", {id: "heading", className: "heading"}, "hello world from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log('parent', parent)
root.render(parent);

