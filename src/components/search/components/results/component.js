const React = require("react");
const Result = require("./components/result");

module.exports = ({ results }) => {
 return (
  <ul>
   {results.map((r, i) => <Result key={i}>{r}</Result>)}
  </ul>
 );
};