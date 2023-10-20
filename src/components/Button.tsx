interface Props {
  name: string;
}

export const Button = ({ name }: Props) => {
  return (
    <>
      <button type="button" className="btn btn-dark">
        {name}
      </button>
    </>
  );
};
