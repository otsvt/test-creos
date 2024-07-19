import clsx from "clsx";

export const renderLoader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div
        className={clsx(
          "w-10 h-10",
          "rounded-full",
          "border-t-2 border-r-2",
          "border-t-black dark:border-t-white border-r-transparent",
          "animate-spin"
        )}
      ></div>
    </div>
  );
};
