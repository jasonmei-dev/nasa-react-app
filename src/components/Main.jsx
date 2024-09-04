const Main = ({ data }) => {
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt={data?.title} className="bgImage"></img>;
    </div>
  );
};

export default Main;
