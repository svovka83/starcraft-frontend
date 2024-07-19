const WorkersPlayerOne = (props) => {
  return (
    <div>
      <button onClick={props.addWorker}>Add worker</button>
      {props.workers.map((worker, index) => (
        <p key={index}>{worker.name}</p>
      ))}
    </div>
  );
};

export default WorkersPlayerOne;
