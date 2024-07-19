import clsx from "clsx";

export const renderError = (error: string) => {
  return (
    <div className={clsx("h-full", "flex justify-center items-center", "text-red-500 font-bold text-2xl")}>
      ({error})
    </div>
  );
};
