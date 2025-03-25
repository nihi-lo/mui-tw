import { useParams } from "react-router";

const ManualViewPage: React.FC = () => {
  const { productName, "*": splat } = useParams();

  return <>{`${productName} ${splat}`}</>;
};

export { ManualViewPage };
