const Mine = (props) => {
  return (
    <div>
      <button onClick={props.takeMinerals}>Add minerals</button>
      <p>Minerals: {props.minerals} </p>
    </div>
  );
};

export default Mine;
