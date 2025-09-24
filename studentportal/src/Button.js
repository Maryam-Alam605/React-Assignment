function Button() {
  return (
    <button
      onClick={() => alert("Form Submitted!")}
      type="submit"
      style={{
        backgroundColor: "#0d1c30ff",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        marginRight: "auto",
        marginLeft: "auto",
        display: "block",
        fontSize: "16px",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      Submit
    </button>
  );
}
export default Button;
