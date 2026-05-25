// src/components/DevEditor/index.jsx
// Floating button — dev-only, invisible in production build
const DevEditor = () => {
  if (!import.meta.env.DEV) return null;

  return (
    <button
      onClick={() => window.open(`${window.location.origin}/?dev-editor`, "_blank")}
      className="fixed bottom-24 right-2 sm:right-6 z-50 bg-violet-700 hover:bg-violet-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-widest uppercase transition-colors"
    >
      EDIT CONTENT
    </button>
  );
};

export default DevEditor;
