// eslint-disable-next-line react/prop-types
const ButtonStarted = ({ text, bgChange = false, aboutSection = false }) => {
  return (
    <button
      className={`${
        bgChange
          ? "bg-veryPaleRed text-brightRed font-bold px-8 py-4 text-xl hover:shadow-lg lg:text-base rounded-full "
          : "bg-brightRed text-veryPaleRed hover:bg-brightRed/60 hover:shadow-lg  px-4 py-2 rounded-full"
      } ${aboutSection && "mr-4"}  `}
    >
      {text || "Get Started!"}
    </button>
  );
};

export { ButtonStarted };
