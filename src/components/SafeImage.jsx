import { useEffect, useState } from "react";

// Shows the image, or a tasteful placeholder naming the expected path
// if the file has not been added yet.
export default function SafeImage({ src, alt, label = "Image not added yet", className = "", ...rest }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (failed) {
    return (
      <div className="img-placeholder" role="img" aria-label={`${alt}: ${label}`}>
        <span>{label}</span>
        <code>{src.replace("./assets/", "assets/")}</code>
      </div>
    );
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      decoding="async"
      draggable="false"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
