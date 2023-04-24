import Card from "./Component/card";

function App() {
  const user1={
    name: "PRAMOD",
    designation: "UI / UX DESIGNER",
    description: "Creates the user interface for an app, website, or other interactive media. Work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. Also process flows or sitemaps."
  };
  const user2={
    name: "BHASKAR",
    designation: "GRAPHICS DESIGNER",
    description: "Create and design various materials for digital and print using elements like typography, illustration, photography and layouts, has an extremely creative mind that can absorb visual trends and deploy them in fresh and exciting ways."
  };
  const user3={
    name: "MAXXAA",
    designation: "EVENT PLANNER",
    description: "Responsible for organizing and managing every aspect of an event. Duties include conceptualizing theme ideas, planning budgets, booking venues, liaising with suppliers and clients, managing logistics, and presenting post-event reports."
  };
    return (
      <div>
        <Card name={user1.name} designation={user1.designation} description={user1.description} image={user1.image}/>
        <br/>
        <Card name={user2.name} designation={user2.designation} description={user2.description} />
        <br/>
        <Card name={user3.name} designation={user3.designation} description={user3.description} />
      </div>
    );
}

export default App;
