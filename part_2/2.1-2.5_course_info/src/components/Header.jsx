const Header = ({ name }) => {
  console.log("from Header:", name);
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Header;
