const Workers = (props) => {
  return (
    <div>
      {props.workers.map((worker, index) => (
        <span key={index}>{worker.name}</span>
      ))}
      <p>PRICE: {props.workers[0].price}</p>
      <button onClick={props.addWorker}>Add worker</button>
    </div>
  );
};

export default Workers;
