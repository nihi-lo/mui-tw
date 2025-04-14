import React from "react";

import { ManualCreatePage, ManualEditPage, ManualViewPage } from "@/components/pages";

import { useManualPageRouter } from "./ManualPageRouter.hook";

export const ManualPageRouter: React.FC = () => {
  const {
    state: { transitionDestination, error, isLoading },
  } = useManualPageRouter();

  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <React.Fragment />;
  }

  switch (transitionDestination) {
    case "CreatePage":
      return <ManualCreatePage />;
    case "EditPage":
      return <ManualEditPage />;
    case "ViewPage":
      return <ManualViewPage />;
    default:
      return <div>error</div>;
  }
};
