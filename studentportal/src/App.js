import Header from "./Header";
import Coffee from "./Coffee.png";
import Footer from "./Footer";
import Button from "./Button";
import Card from "./Card";
import Form from "./Form";

function App() {
  return (
    <div>
      <Header Coffee={Coffee} />
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          margin: "30px",
        }}
      >
        <Card
          title="Notes"
          description="Get all subject notes in one place."
          link="/notes"
        />
        <Card
          title="Tutorials"
          description="Watch easy-to-understand video tutorials."
          link="/tutorials"
        />
        <Card
          title="Tuitions"
          description="Get experienced tutors for your subjects."
          link="/tutorials"
        />
        <Card
          title="Books"
          description="Get books for all subjects at affordable prices."
          link="/tutorials"
        />
      </div>
      <Form />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
