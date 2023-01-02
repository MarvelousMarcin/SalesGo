import star from "../../assets/star.png";

const Review = ({ name, score, comment = "" }) => {
  const starObj = {
    1: [<img src={star} />],
    2: [<img src={star} />, <img src={star} />],
    3: [<img src={star} />, <img src={star} />, <img src={star} />],
    4: [
      <img src={star} />,
      <img src={star} />,
      <img src={star} />,
      <img src={star} />,
    ],
    5: [
      <img src={star} />,
      <img src={star} />,
      <img src={star} />,
      <img src={star} />,
      <img src={star} />,
    ],
  };

  return (
    <section className="flex flex-row items-center justify-between mb-[1rem] flex-wrap md:flex-nowrap">
      <div>
        <h2 className=" font-bold text-xl md:text-lg md:font-normal">{name}</h2>
        <section className="flex flex-row">{starObj[score]}</section>
      </div>
      <h2 className="w-[25rem]">{comment}</h2>
    </section>
  );
};

export default Review;
