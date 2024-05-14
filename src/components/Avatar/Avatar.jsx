import "./Avatar.css";
import taylor from "../../assets/images/avatars/taylor.jpg";
function Avatar(name, size) {
  return (
    <div className="avatar">
      <img src={taylor} />
    </div>
  );
}

export { Avatar };
