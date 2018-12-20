const React = require("react");
const SearchField = require("./components/searchField");

module.exports = ({ onChange, onSubmit }) => {
 return (
  <form onSubmit={onSubmit}>
   <SearchField onChange={onChange} />
  </form>
 );
};