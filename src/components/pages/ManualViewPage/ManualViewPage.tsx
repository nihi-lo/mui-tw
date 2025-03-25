import { useParams } from "react-router";

const ManualViewPage: React.FC = () => {
  const { projectName, "*": splat } = useParams();

  return <>{`${projectName} ${splat}`}</>;
};

export { ManualViewPage };
