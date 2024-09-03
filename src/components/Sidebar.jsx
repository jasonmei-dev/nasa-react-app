const Sidebar = ({ handleToggleModal }) => {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita vel autem cum fugiat earum consequuntur quaerat. Sed atque cumque officiis aspernatur debitis, magnam, maxime
            blanditiis, laboriosam in error magni!
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
