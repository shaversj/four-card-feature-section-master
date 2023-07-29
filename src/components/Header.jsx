const Header = () => {
  return (
    <div
      className={
        "pb-[52px] pt-[72px] font-Poppins lg:mx-[425px] lg:grid lg:place-items-center"
      }
    >
      <h1 className={"text-2xl font-thin leading-10 lg:text-4xl"}>
        Reliable, efficient delivery
      </h1>
      <h2 className={"text-2xl font-medium lg:text-4xl"}>
        Powered by Technology
      </h2>
      <p className={"pt-4 text-center font-extralight"}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
  );
};

export default Header;
