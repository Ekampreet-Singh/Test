import React, { useState, useEffect } from 'react';

const fruits = [
  { id: 1, name: "Apple", color: "Red" },
  { id: 2, name: "Banana", color: "Yellow" },
  { id: 3, name: "Orange", color: "Orange" },
  { id: 4, name: "Grapes", color: "Purple" },
  { id: 5, name: "Kiwi", color: "Green" }
];

function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  useEffect(() => {
    const filteredList = fruits.filter(fruit =>
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFruits(filteredList);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search and Filter Fruits</h1>
      <input placeholder="Search fruits" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <ul>
        {filteredFruits.map(fruit => (
          <li key={fruit.id}>
            {fruit.name} ({fruit.color})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAndFilter;
