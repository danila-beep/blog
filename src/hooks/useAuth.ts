import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuth = () => {
  const { email, token, id } = useSelector(
    (state: RootState) => state.userState
  );

  return {
    email,
    token,
    id,
  };
};
