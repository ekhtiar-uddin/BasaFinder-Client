import { getAllProperties, getSingleProperty } from "@/services/Property";
import { getAllUsers } from "@/services/User";
import { IProperty } from "@/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useSingleProperty = (propertyId: string) => {
  const [data, setData] = useState<IProperty | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getSingleProperty(propertyId);
        setData(res.data);
      } catch (err: any) {
        setIsError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [propertyId]);

  // const reFetch = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await getSingleProperty(propertyId);
  //     setData(res.data);
  //   } catch (err) {
  //     setIsError(err);
  //   }
  //   setIsLoading(false);
  // };

  return { data, isError, isLoading } as {
    data: IProperty;
    isError: boolean;
    isLoading: boolean;
  };
};

export const useAllProperties = (page, limit, query) => {
  const [data, setData] = useState<IProperty[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        console.log("from useAllProperties", query);
        const res = await getAllProperties(page, limit, query);
        console.log("from res sdkjf", res);
        setData(res.data);
      } catch (err: any) {
        setIsError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [JSON.stringify(query)]);

  // const reFetch = async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await getAllProperties("ksdjf", undefined, memoQuery);
  //     setData(res.data);
  //   } catch (err) {
  //     setIsError(err);
  //   }
  //   setIsLoading(false);
  // };

  return { data, isError, isLoading };
};

export const useAllUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getAllUsers();
        setData(res.data);
      } catch (err: any) {
        setIsError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // const reFetch = async () => {
  //   setIsLoading(true);
  //   try {
  //     const { data: users } = await getAllUsers();
  //     const activeUsers = users?.filter((user) => user?.isActive === true);

  //     setData(activeUsers);
  //   } catch (err) {
  //     setIsError(err);
  //   }
  //   setIsLoading(false);
  // };

  return { data, isError, isLoading, setData };
};
