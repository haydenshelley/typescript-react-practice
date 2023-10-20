interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

export const Button = ({ children, onClick, color }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
