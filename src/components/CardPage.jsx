import data from "../data.json";
import Header from "./Header.jsx";
import CardLayout from "./CardLayout.jsx";

const CardPage = () => {
  return (
    <div
      className={
        "mx-auto min-h-screen max-w-screen-sm bg-very-light-gray px-8 lg:max-w-screen-lg"
      }
    >
      <Header />
      <CardLayout data={data} />
    </div>
  );
};

export default CardPage;
