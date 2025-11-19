export interface CardProps {
  title: string;
  content: string;
}

// Add the ButtonProps interface below
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
