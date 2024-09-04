const Main = ({ data }) => {
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage"></img>;
    </div>
  );
};

export default Main;
