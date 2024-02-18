type TopMediaActionableInterface = {
  onClick: (id: number) => void;
  image: string;
  title: string;
  action?: string;
  active?: boolean;
  description: string;
  id: number;
  variant?: "default" | "paper";
};

export default TopMediaActionableInterface;
