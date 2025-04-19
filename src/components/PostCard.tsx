import { FC } from "react";
import { PostType } from "../constants/types";
import { Link } from "react-router";

interface PostCardProps extends PostType {
  size?: "s" | "m" | "l";
}

const PostCard: FC<PostCardProps> = ({ id, title, description }) => {
  return (
    <div
      className="
      relative
    "
    >
      <Link
        to={id}
        className="
        absolute inset-0
      "
      ></Link>
      <p
        className="
        text-4xl font-medium font-serif pb-[20px]
      "
      >
        {title}
      </p>
      <p
        className="
        text-1xl font-serif
      "
      >
        {description}
      </p>
    </div>
  );
};

export default PostCard;
