import React from "react";
import ReadComp from "../../components/todo/ReadComp";
import { useParams } from "react-router-dom";

function ReadPage() {
  const { tno } = useParams();

  return (
    <div>
      <ReadComp tno={tno} />
    </div>
  );
}

<<<<<<< HEAD
export default ReadPage;
=======
export default ReadPage;
>>>>>>> 80a304dc839f4f3b527fb021905f8f0409e113a6
