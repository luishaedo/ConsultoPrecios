import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const SearchBar = ({ onSearch }) => {
  const [art, setArt] = useState("");

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    setArt(searchTerm);
    onSearch(searchTerm);
  };

  // const handleSearch = () => {
  //   onSearch(art);
  // };

  const handleClear = () => {
    setArt("");
    onSearch("");
  };

  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        className="me-auto"
        placeholder="Articulo"
        value={art}
        onChange={handleInput}
      />
      {/* <Button variant="secondary" onClick={handleSearch}>
        Buscar
      </Button> */}
      <div className="vr" />
      <Button variant="outline-danger" onClick={handleClear}>
        Borrar
      </Button>
    </Stack>
  );
};

export default SearchBar;
