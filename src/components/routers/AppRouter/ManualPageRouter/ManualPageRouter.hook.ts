import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router";

import { type TransitionDestination } from "./ManualPageRouter.type";

type State = {
  transitionDestination: TransitionDestination | undefined | null;
  error: Error | null;
  isLoading: boolean;
};

type Action = undefined;

const useManualPageRouter = (): { state: State; action: Action } => {
  const { projectName, "*": splat } = useParams();
  const [searchParams] = useSearchParams();

  const transitionDestination = useMemo<TransitionDestination | undefined | null>(() => {
    if (projectName === undefined) {
      return null;
    }

    if (searchParams.get("edit") === "true") {
      return "EditPage";
    }

    return "ViewPage";
  }, [projectName, searchParams]);

  const error = useMemo<Error | null>(
    () => (transitionDestination === null ? new Error("") : null),
    [transitionDestination],
  );

  const isLoading = useMemo<boolean>(
    () => transitionDestination === undefined,
    [transitionDestination],
  );

  return {
    state: {
      transitionDestination,
      error,
      isLoading,
    },
    action: undefined,
  };
};

export { useManualPageRouter };
