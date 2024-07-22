const Mine = ({ minerals, takeMinerals }) => {
  return (
    <div>
      <p>Minerals: {minerals} </p>
      <button onClick={takeMinerals}>Add minerals</button>
    </div>
  );
};

export default Mine;
