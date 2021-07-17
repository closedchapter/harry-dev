import React from 'react';
import { useHistory } from 'react-router-dom';
import { db } from "../firebase";

const CreateForm = () => {
  let history = useHistory();
  const [Type, setType] = React.useState("");
  const [Location, setLocation] = React.useState("");

  const handleSubmit = (event) => {
    db.collection("motives").add({
      Type: Type,
      Location: Location
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      history.push("/");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit} className=''>
      <label className='text-base font-semibold'>
        Type of motive
        <input
          className='input'
          name="type"
          type="text"
          placeholder='e.g. house party or cinema'
          value={Type}
          onChange={e => setType(e.target.value)}
          />
      </label>
      <label className='text-base font-semibold'>
        Location of motive
        <input
          className='input'
          name="location"
          type="text"
          placeholder='e.g. manchester or flat 1'
          value={Location}
          onChange={e => setLocation(e.target.value)}
          />
      </label>
      <input type="submit" value="Upload" className='my-5 p-2 w-full btn'/>
    </form>
  )
}

function Create() {
  return (
    <div>
      <div className='text-3xl font-bold mb-8'>Create a motive</div>
      <CreateForm />
    </div>
  );
}

export default Create;

