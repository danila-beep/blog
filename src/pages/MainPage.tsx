import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/api_endpoints";
import { PostsListType } from "../constants/types";
import PostCard from "../components/PostCard";

function MainPage() {
  const [postsData, setPostsData] = useState<PostsListType>([]);

  useEffect(() => {
    const url = `${API_BASE_URL}${API_ENDPOINTS.posts}`;
    axios.get(url).then((res) => {
      const allPersons = res.data;
      setPostsData(allPersons);
    });
  }, [setPostsData]);

  return (
    <section
      className="
      max-w-[1440px] mx-auto px-[32px]
    "
    >
      <h1 className="text-[#201F1F] font-bold text-4xl text-center underline pb-[30px]">
        Latest Updates
      </h1>

      <ul
        className="
        flex flex-col flex-wrap
        h-full max-h-[50vh]
        overflow-x-auto
      "
      >
        {postsData.map((post) => {
          return (
            <li key={post.id}>
              <PostCard {...post} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MainPage;
