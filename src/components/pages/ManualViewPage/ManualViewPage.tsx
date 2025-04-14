import { useParams } from "react-router";

export const ManualViewPage: React.FC = () => {
  const { productName, "*": splat } = useParams();

  return <>{`${productName} ${splat}`}</>;
};
