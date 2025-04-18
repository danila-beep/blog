import { FC } from "react";
import { Link } from "react-router";

type PostCardProps = {
  id: number;
  title: string;
};

const PostCard: FC<PostCardProps> = ({ id, title }) => {
  console.log(123);
  return (
    <div>
      <p>{title}</p>
      <Link to={String(id)}>Login again</Link>
    </div>
  );
};

export default PostCard;
