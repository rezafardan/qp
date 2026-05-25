const CertBadge = ({ src, alt, href, className = "", width = "" }) => (
  <div className={className || width}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  </div>
);

export default CertBadge;
