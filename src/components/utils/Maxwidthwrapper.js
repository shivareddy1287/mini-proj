import clsx from "clsx";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={clsx("max-width-container", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
