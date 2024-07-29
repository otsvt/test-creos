import { FC, useEffect, useState } from "react";
import { IDesigner } from "../../types/interfaces";
import { renderError } from "../../utils/render/render-error";
import { ProfilesList } from "./ProfilesList";
import { ProfileDetails } from "./ProfileDetails";

export const Profiles: FC<{ designers: IDesigner[] | null }> = ({ designers }) => {
  const [activeDesigner, setActiveDesigner] = useState<IDesigner | null>(null);

  useEffect(() => {
    designers && setActiveDesigner(designers[0]);
  }, [designers]);

  const chooseDesigner = (designer: IDesigner) => setActiveDesigner(designer);

  return (
    <section className="h-full p-6">
      {designers ? (
        <div className="h-full flex gap-10">
          <ProfilesList designers={designers} chooseDesigner={chooseDesigner} />
          {activeDesigner && <ProfileDetails designer={activeDesigner} />}
        </div>
      ) : (
        renderError("Please update the page")
      )}
    </section>
  );
};
