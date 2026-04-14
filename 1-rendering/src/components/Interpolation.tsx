export const Interpolation = () => {
  const name = "Sebastian";
  //   const person = { name: "Sebastian", age: 46, isMarried: true };
  const imageUrl =
    "https://im.indiatimes.in/media/content/2017/Jan/intro_natural_movement_well_blogs_nytimes_com_1483626526_725x725.jpg";

  return (
    <>
      <p>Interpolation: {name}</p>
      <img src={imageUrl} alt="Running is fun" />
    </>
  );
};
