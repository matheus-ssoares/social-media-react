/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import api from 'Services/api';
import { toast } from 'react-toastify';

export enum RequestHttpType {
  post = 'post',
  put = 'put',
  patch = 'patch',
  delete = 'delete',
}

interface UseMutationProps<FunctionReturn = any> {
  path: string;
  requestType: RequestHttpType;
  onComplete?: (result: FunctionReturn) => void;
  onError?: (error: AxiosError) => void;
}

interface UseMutationReturn<FunctionRequest = any, FunctionResponse = any> {
  request: (variables: FunctionRequest) => Promise<FunctionResponse | null>;
  hasError: boolean;
  isLoading: boolean;
}

export function useMutation<FunctionRequest = any, FunctionReturn = any>({
  path,
  requestType,
  onComplete,
  onError,
}: UseMutationProps<FunctionReturn>): UseMutationReturn<
  FunctionRequest,
  FunctionReturn
> {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);
  async function request(
    params: FunctionRequest
  ): Promise<FunctionReturn | null> {
    try {
      setError(false);
      setLoading(true);
      const result = await api[requestType]<
        FunctionRequest,
        AxiosResponse<FunctionReturn>
      >(path, { ...params });
      if (onComplete) {
        onComplete(result.data);
      }
      setLoading(false);
      return result.data;
    } catch (error) {
      setError(true);
      setLoading(false);
      if (error instanceof Error && error.message === 'Network Error') {
        toast.error('Falha ao realizar operação, serviço indisponível', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return null;
      }
      if (onError && axios.isAxiosError(error)) {
        onError(error);
        return null;
      }
      return null;
    }
  }

  return {
    request,
    hasError,
    isLoading,
  };
}
