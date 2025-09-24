function Form() {
  return (
    <form
      style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "500px",
        margin: "10px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3
        style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}
      >
        Register Now!
      </h3>

      <input
        type="text"
        placeholder="Enter name"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <input
        type="email"
        placeholder="Enter email"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </form>
  );
}
export default Form;
