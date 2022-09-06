import useSwr, { useSWRConfig } from "swr";
import axiosInstance from "../../libs/axios";
import { IPerson, IUpdatePerson } from "../../types/person";
import { IPagination } from "../../types/api";
import { DEFAULT_PAGINATION_OPTIONS } from "../../utils/const";

const API_PATH = "/persons";

export const useFetchPerson = (id: number) => {
  return useSwr(`${API_PATH}/${id}`);
};

export const useFetchPersons = (
  options: IPagination = DEFAULT_PAGINATION_OPTIONS
) => {
  return useSwr({ url: API_PATH, params: options });
};

/**
 * update person
 * @param id
 * @param data
 */
export const useUpdatePerson = async (id: number, data: IUpdatePerson) => {
  const _url = `${API_PATH}/${id}`;
  const _update = async () => {
    try {
      const result = await axiosInstance.patch(_url, data);
      return result.data;
    } catch (e) {
      // FIX implement error handling
      throw Error("implement me");
    }
  };

  const { mutate } = useSWRConfig();

  await mutate(_url, _update, {
    populateCache: (result: IPerson) => {
      return result;
    },
    revalidate: false,
    rollbackOnError: true,
  });
};

/**
 * create person
 * @param data
 */
export const useAddPerson = async (data: IPerson) => {
  const _create = async () => {
    try {
      const result = await axiosInstance.post(API_PATH, data);
      return result.data;
    } catch (e) {
      // FIX implement error handling
      throw Error("implement me");
    }
  };

  const { mutate } = useSWRConfig();
  await mutate(API_PATH, _create, {
    populateCache: (result: IPerson, currentData: Array<IPerson>) => {
      return [...currentData, result];
    },
    revalidate: false,
    rollbackOnError: true,
  });
};
