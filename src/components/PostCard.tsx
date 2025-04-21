import { FC } from "react";
import { PostType } from "../constants/types";
import { Link } from "react-router";
import ClampedText from "../shared/interface/atoms/ClampedText";

interface PostCardProps extends PostType {
  size?: "s" | "m" | "l";
}

const PostCard: FC<PostCardProps> = ({ id, title, description }) => {
  return (
    <div
      className="
      relative border-b border-[#ADADAD50] py-[32px] mx-[14px]
    "
    >
      {/* <Link
        to={id}
        className="
        absolute inset-0
      "
      ></Link> */}
      <p
        className="
        text-[30px] leading-[auto] font-medium font-serif pb-[13px]
      "
      >
        {title}
      </p>
      <ClampedText className="text-[14px] font-poppins mb-[32px]" maxLines={4}>
        {description}
      </ClampedText>
      <div className="flex flex-row gap-[7px] items-center justify-start">
        <img
          src="src/assets/authorExample.png"
          className="max-w-[36px] w-full aspect-square"
        />
        <div>
          <p className="font-poppins font-semibold text-[16px]">
            Husni Ramdani
          </p>
          <p className="font-poppins text-[12px]">30 November 2021</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
