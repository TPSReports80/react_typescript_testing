type OscarProps = {
  children: React.ReactNode;
};

const Oscar = ({ children }: OscarProps) => {
  return <h4>{children}</h4>;
};

export default Oscar;
