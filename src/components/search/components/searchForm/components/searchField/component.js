const React = require("react");

module.exports = ({ onChange }) => {
 return (
  <input type="text" placeholder="Search" name="q" onChange={onChange} />
 );
};