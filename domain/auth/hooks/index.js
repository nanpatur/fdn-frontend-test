import { useMutation } from "react-query";
import AuthService from "../services";
// import { IAuthLoginBody } from "../models";

// interface IMutationOptions {
//   onSuccess?: (data: string) => void;
//   onError?: (error: any) => void;
// }

export const useLogin = async (body, options) => {
  try {
    const authService = new AuthService();
    const data = await authService.login(body);
    options.onSuccess && options.onSuccess(data);
    return {
      data,
    };
  } catch (error) {
    options.onError && options.onError(error);
  }
  // return useMutation(() => authService.login(body), options);
};

export const useLogout = () => {
  const authService = new AuthService();
  //
};
