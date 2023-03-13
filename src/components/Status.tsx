type StatusProps = {
  status: "loading" | "error" | "successful";
};

const Status = ({ status }: StatusProps) => {
  return (
    <div>
      <p>{status}</p>
    </div>
  );
};

export default Status;
