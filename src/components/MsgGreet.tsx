type MsgGreetProps = {
  name: string;
  isLogged: boolean;
  messageCount?: number;
};

const MsgGreet = ({ name, isLogged, messageCount = 5 }: MsgGreetProps) => {
  return (
    <div>
      {isLogged
        ? `${name} you have ${messageCount} unread messages`
        : "Welcome guest."}
    </div>
  );
};

export default MsgGreet;
