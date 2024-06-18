import CountUp from "react-countup";

const Counter = ({ value }) => {
  return (
    <div>
      <CountUp end={value} duration={4} enableScrollSpy scrollSpyDelay={200} />
    </div>
  );
};

export default Counter;
