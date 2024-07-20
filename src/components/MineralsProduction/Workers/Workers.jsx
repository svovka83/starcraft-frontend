const Workers = (props) => {
  return (
    <div>
      <button disabled={props.turn} onClick={props.addWorker}>Add worker</button> price:{" "}
      {props.workers[0].price}
      {props.workers.map((worker, index) => (
        <p key={index}>{worker.name}</p>
      ))}
    </div>
  );
};

export default Workers;
