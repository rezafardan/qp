const TimelineBlock = ({ children, isLast = false }) => (
  <ul className="relative ml-3 flex flex-col">
    <div className="relative px-4 ml-2 sm:ml-0">
      <div
        className={`absolute -left-3 top-0 w-px bg-white ${
          isLast ? "bottom-0" : "bottom-[-24px]"
        }`}
      />
      {children}
    </div>
  </ul>
);

export default TimelineBlock;
