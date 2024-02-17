// eslint-disable-next-line react/prop-types
const ButtonStarted = ({ text }) => {
  return (
    <button className="bg-brightRed text-veryPaleRed px-7 py-2 rounded-full hover:bg-brightRed/60 hover:shadow-lg mr-3">
      {text || "Get Started!"}
    </button>
  );
};

export { ButtonStarted };
