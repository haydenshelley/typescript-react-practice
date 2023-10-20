interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "dark";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
