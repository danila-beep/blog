import axios from "axios";
import { useEffect, useState } from "react";
import { PostsListType } from "../constants/types";

function NewsPage() {
  const [postsData, setPostsData] = useState<PostsListType>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3000/news";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      console.log(allPersons);
      setPostsData(allPersons);
    });
  }, [setPostsData]);

  return (
    <>
      <div className="text-amber-50">
        {postsData.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
      ;
    </>
  );
}

export default NewsPage;
