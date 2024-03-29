

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm"


function Cabins() {

  const [showForm,setShowForm] = useState(false)
  
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Cabañas</Heading>
      <p>Filtrar / Sort</p>
    </Row>

    <Row>
      <CabinTable/>
      <Button onClick={() =>setShowForm(show=>!show)} >Agregar nueva cabaña</Button>
      {showForm && <CreateCabinForm />}  
    </Row>
    </>
  );
}

export default Cabins;
