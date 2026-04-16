export const Button = () => {
  const handleClick = () => {
    console.log("Klick inträffat");
  };

  return (
    <>
      <button onClick={handleClick}>Spara</button>
      <button
        onClick={() => {
          console.log("Någonting annat");
        }}
      >
        Ångra
      </button>
    </>
  );
};
