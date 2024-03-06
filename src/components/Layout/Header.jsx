import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>YumYum</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="table of sweet food" />
      </div>
    </>
  );
};

export default Header;
