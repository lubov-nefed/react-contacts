import "./Avatar.css";
import taylor from "../../assets/images/avatars/taylor.jpg";
function Avatar({ img, size }) {
  return (
    <div className="avatar">
      <img src={img} />
    </div>
  );
}

export { Avatar };
