export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>{name}'s private profile page</div>;
};

export default Profile;
