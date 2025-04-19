import { useParams } from "react-router";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/api_endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostType } from "../constants/types";

function PostPage() {
  const currentItemId = useParams();
  const [postData, setPostData] = useState<PostType>();

  useEffect(() => {
    const url = `${API_BASE_URL}${API_ENDPOINTS.posts}/${currentItemId.postId}`;
    axios.get(url).then((res) => {
      const allPersons = res.data;
      setPostData(allPersons);
    });
  }, []);

  return (
    <section
      className="
      max-w-[600px] mx-auto px-[32px]
    "
    >
      <h1
        className="
        text-5xl text-center font-serif font-medium my-[0px]
      "
      >
        {postData?.title}
      </h1>
      <span
        className="
        block text-5xl leading-[100%] font-bold text-center mx-auto pb-[20px]
      "
      >
        . . .
      </span>
      <img
        src={postData?.image}
        alt={`image: ${postData?.title}`}
        className="
        pb-[30px] mx-auto w-full
      "
      />
      <p
        className="
        font-mono text-1xl
      "
      >
        {postData?.description}
      </p>
    </section>
  );
}

export default PostPage;
