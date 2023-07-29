import Card from "./Card.jsx";

const CardLayout = ({ data }) => {
  return (
    <div
      className={"lg:mx-24 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8"}
    >
      {data.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          imageName={item.imageName}
          borderColor={item.borderColor}
        />
      ))}
    </div>
  );
};

export default CardLayout;
