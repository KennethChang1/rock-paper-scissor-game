const Paper = ({ onClick }) => {
  return (
    <div className="icon-container icon-container-blue" onClick={onClick}>
      <img className="icon-img" src="/icon-paper.svg" alt="" />
    </div>
  );
};

export default Paper;
