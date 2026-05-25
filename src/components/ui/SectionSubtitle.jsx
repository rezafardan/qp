const SectionSubtitle = ({ children, className = "" }) => (
  <h3
    className={`text-center mt-10 md:text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-pink-300 to-violet-300 tracking-widest ${className}`}
  >
    {children}
  </h3>
);

export default SectionSubtitle;
