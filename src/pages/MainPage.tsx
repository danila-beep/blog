import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/api_endpoints";
import { useAppDispatch, useAppSelector } from "../shared/lib/hooks";
import { setPosts } from "../store/slices/postsSlice";
import PostCard from "../components/PostCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import ROUTES from "../constants/routes";

function MainPage() {
  const dispatch = useAppDispatch();
  const postsState = useAppSelector((state) => state.postsState);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log(user, 123);
      navigate(ROUTES.auth, { state: { background: location } });
    }
  });

  useEffect(() => {
    const url = `${API_BASE_URL}${API_ENDPOINTS.posts}`;
    axios.get(url).then((res) => {
      const postsData = res.data;
      dispatch(setPosts(postsData));
    });
  }, []);

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
        flex flex-col flex-wrap overflow-x-auto max-h-[600px] justify-start items-start
      "
      >
        {postsState.map((post) => {
          return (
            <li key={post.id} className="max-w-[210px]">
              <PostCard {...post} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MainPage;
