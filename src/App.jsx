import React, { useEffect, useState } from "react";
import { bddActual } from "./utils/bdd";
import SearchBar from "./componentes/SearchBar";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";




function App() {
  const [resultadoBusqueda, setresultadoBusqueda] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setresultadoBusqueda(bddActual);
  }, []);
  
  // const handleDataImport = (importedData) => {
    
  //   setData(importedData);
  // };
  
  const handleSearch = (art) => {
    if (art === "") {
      setresultadoBusqueda(bddActual);
    } else {
      const resultado = bddActual.filter((objeto) =>
        objeto.nombre.toLowerCase().includes(art.toLowerCase())
      );
      setresultadoBusqueda(resultado);
    }
  };  

  const calcularPrecioDescuento = (precio) => {
    let descuento = precio * 0.2;
    let precioDescuento = precio - descuento;
    precioDescuento = Math.ceil(precioDescuento / 100) * 100;
    return precioDescuento;
  };

  // const handleActualizacion = () => {
  //   setShowInput((prevShowInput) => !prevShowInput);
  // };

  return (
    <>
      <div style={{ margin: "20px" }}>
        {" "}
        <h1>Consultor de precios</h1>
          <SearchBar onSearch={handleSearch} />
        <div style={{ margin: "20px" }}>
          {resultadoBusqueda?.map((articulo, index) => (
            <ListGroup key={index}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{articulo.nombre}</div>
                  {articulo.descripcion}
                </div>
                <div>
                  <div>
                    <Badge bg="primary" pill>
                      Precio Tarjeta: {articulo.precioTarjeta}
                    </Badge>
                  </div>
                  <div>
                    <Badge bg="success" pill>
                      Precio Descuento:{" "}
                      {calcularPrecioDescuento(articulo.precioTarjeta)}
                    </Badge>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
          {/* <div style={{ margin: "20px" }}>
            {" "}
            <Button variant="primary" onClick={handleActualizacion}>
              Actualizar bdd
            </Button>{" "}
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
