const JumpingDots = () => (
  <div className="flex justify-center items-center space-x-2 mb-2">
    <div className="w-3 h-3 bg-violet-500 rounded animate-jump" style={{ animationDelay: "0s" }} />
    <div className="w-3 h-3 bg-violet-500 rounded animate-jump" style={{ animationDelay: "0.3s" }} />
    <div className="w-3 h-3 bg-violet-500 rounded animate-jump" style={{ animationDelay: "0.6s" }} />
  </div>
);

export default JumpingDots;
