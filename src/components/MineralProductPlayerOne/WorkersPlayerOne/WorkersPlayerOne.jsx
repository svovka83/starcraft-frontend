const WorkersPlayerOne = (props) => {
  return (
    <div>
      <button onClick={props.addWorker}>Add worker</button>
      {props.workers.map((w, index) => (
        <p key={index}>{w.name}</p>
      ))}
    </div>
  );
};

export default WorkersPlayerOne;
