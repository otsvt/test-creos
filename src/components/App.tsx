import { FC, PropsWithChildren } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useOpenedFrame } from "../hooks/use-opened-frame";
import { useFetchData } from "../hooks/use-fetch-data";
import { Frames } from "../types/enums";
import { Header } from "./header/Header";
import { Aside } from "./aside/Aside";
import { Main } from "./main/Main";
import { Dashboard } from "./dashboard/Dashboard";
import { Profiles } from "./profiles/Profiles";
import clsx from "clsx";

export const App: FC = () => {
  const [openedFrame, changeFrame] = useOpenedFrame();
  const [commentsState, designersState] = useFetchData();

  return (
    <Wrapper>
      <Header />
      <Body>
        <Aside selectedFrame={openedFrame} changeFrame={changeFrame} />
        <TransitionGroup component={Content}>
          <CSSTransition key={openedFrame} timeout={300} classNames="page-transition">
            <>
              {openedFrame === Frames.Main && <Main mainState={[commentsState, designersState]} />}
              {openedFrame === Frames.Dashboard && <Dashboard designers={designersState.data} />}
              {openedFrame === Frames.Profiles && <Profiles designers={designersState.data} />}
            </>
          </CSSTransition>
        </TransitionGroup>
      </Body>
    </Wrapper>
  );
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={clsx(
        "font-roboto",
        "min-h-screen",
        "flex flex-col",
        "bg-bgLight dark:bg-bgDark",
        "text-black/80 dark:text-white/80"
      )}
    >
      {children}
    </div>
  );
};

const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx("p-6 h-[800px] w-full max-w-screen-2xl mx-auto", "flex gap-5", "transition-colors")}>
      {children}
    </div>
  );
};

const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={clsx(
        "overflow-hidden",
        "grow",
        "border-2 border-frameBorder",
        "bg-frameLight dark:bg-frameDark",
        "rounded-e-2xl"
      )}
    >
      {children}
    </main>
  );
};
