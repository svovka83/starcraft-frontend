const Mine = (props) => {
  return (
    <div>
      <p>Minerals: {props.minerals} </p>
      <button disabled={props.turn} onClick={props.takeMinerals}>
        Add minerals
      </button>
    </div>
  );
};

export default Mine;
