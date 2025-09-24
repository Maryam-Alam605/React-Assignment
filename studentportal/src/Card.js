function Card({ title, description, link }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "16px",
        width: "220px",
        margin: "10px",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </h3>
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px" }}>
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#000000c7",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        Visit
      </a>
    </div>
  );
}
export default Card;
