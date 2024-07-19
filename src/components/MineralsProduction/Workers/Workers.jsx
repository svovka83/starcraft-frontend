const Workers = (props) => {
  return (
    <div>
      <button onClick={props.addWorker}>Add worker</button> price:{" "}
      {props.workers[0].price}
      {props.workers.map((worker, index) => (
        <p key={index}>{worker.name}</p>
      ))}
    </div>
  );
};

export default Workers;
