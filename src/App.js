import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DatesActions } from "./Components/DatesActions";
import { DatesCount } from "./Components/DatesCount";
import { DatesList } from "./Components/DatesList";
import { person } from "./data";
const App = () => {
  const [personData, setPersondata] = useState(person);
  const onDelete = () => {
    setPersondata([]);
  };
  const onView = () => {
    setPersondata(person);
  };
  useEffect(() => {
    setPersondata([]);
  },[]);

  return (
    <div className="font color-body">
      <Container className="">
        <DatesCount count={personData.length} />
        <DatesList person={personData} />
        <DatesActions deleteData={onDelete} onView={onView} />
      </Container>
    </div>
  );
};

export default App;
