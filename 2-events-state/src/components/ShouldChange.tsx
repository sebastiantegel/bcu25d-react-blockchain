export const ShouldChange = () => {
  let name = "Sebastian";

  const changeName = () => {
    name = "Hanna";

    console.log(name);
  };

  return (
    <>
      <p onClick={changeName}>{name}</p>
    </>
  );
};
