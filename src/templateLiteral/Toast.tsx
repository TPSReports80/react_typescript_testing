type HorizontalType = "left" | "center" | "right";
type VerticalType = "top" | "center" | "bottom";

// using template literal as type for position prop
// use Exclude type to exclude specific types within the template literal
// use union to satisfy the 'center' type
type ToastProps = {
  position:
    | Exclude<`${HorizontalType}-${VerticalType}`, "center-center">
    | "center";
};
const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <h2>Status - {position}</h2>
    </div>
  );
};

export default Toast;

/*
    position can be 'left-center' , 'right-bottom' 'center-center' etc etc
*/
