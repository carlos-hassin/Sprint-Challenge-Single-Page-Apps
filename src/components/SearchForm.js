import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
