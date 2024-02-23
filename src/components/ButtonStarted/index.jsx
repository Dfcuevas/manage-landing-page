// eslint-disable-next-line react/prop-types
const ButtonStarted = ({ text, bgChange = false }) => {
  return (
    <button
      className={`${
        bgChange
          ? "bg-veryPaleRed text-brightRed font-bold px-8 py-4 text-xl hover:shadow-lg"
          : "bg-brightRed text-veryPaleRed hover:bg-brightRed/60 hover:shadow-lg mr-3"
      } px-7 py-2 rounded-full  `}
    >
      {text || "Get Started!"}
    </button>
  );
};

export { ButtonStarted };
