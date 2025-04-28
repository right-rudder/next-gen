import CountUp from "react-countup";

const Counter = ({ value, title }) => {
  return (
    <div className="flex flex-col bg-slate-950 items-center text-center flex-1 min-w-[150px]">
      <div className="border-r border-white/20 last:border-0 px-6 sm:px-8 py-6">
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          <CountUp
            end={value}
            enableScrollSpy
            scrollSpyDelay={100}
            scrollSpyOnce
          />
          <span className="text-main-blue">{value <= 100 ? "%" : "+"}</span>
        </span>
        <h2 className="mt-3 text-base sm:text-lg text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Counter;
