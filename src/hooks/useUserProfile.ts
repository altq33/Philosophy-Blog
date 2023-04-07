import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProfileUser } from "../types/responses/UserResponse";
import UserService from "../services/UserService";

export const useUserProfile = () => {
  const params = useParams();
  const [user, setUser] = useState<IProfileUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    scrollTo(0, 0);
    setIsLoading(true);
    UserService.getProfile(params.login!!).then((res) => {
      setUser(res.data);
      setIsLoading(false);
    });
  }, [params.login]);

  return { user, isLoading };
};
