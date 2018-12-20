const search = async q => {
 const res = await fetch(`http://localhost:3000/search?q=${q}`);
 const json = await res.json();
 return json;
}

module.exports.search = search;