const Header = ({ Coffee }) => {
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            verticalAlign: "middle",
          }}
        >
          <a
            href="/"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Home
          </a>
          <a
            href="/about"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            About
          </a>
          <a
            href="/contact"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Contact
          </a>
        </div>
        <img src={Coffee} alt="Logo" style={{ height: "70px" }} />
      </nav>
    </header>
  );
};
export default Header;
