const Mine = (props) => {
  return (
    <div>
      <button disabled={props.turn} onClick={props.takeMinerals}>
        Add minerals
      </button>
      <p>Minerals: {props.minerals} </p>
    </div>
  );
};

export default Mine;
