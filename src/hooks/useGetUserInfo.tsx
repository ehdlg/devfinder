import { useState, useEffect } from 'react';
import { IUserInfo } from '../types';
import { API_KEY } from '../constants';

function useGetUserInfo(user: string) {
  const [userInfo, setUserInfo] = useState<{
    data: IUserInfo | null;
    error: null | string;
    loading: boolean;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  const getUserInfo = async () => {
    const URL = `https://api.github.com/users/${user}`;
    const fetchOptions = {
      headers: {
        'Content-Type': 'application/vnd.github+json',
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    const response = await fetch(URL, fetchOptions);

    if (response.status === 404) {
      setUserInfo((prevInfo) => {
        return { ...prevInfo, error: `User ${user} not found`, loading: false };
      });
      return;
    }

    const data = await response.json();

    setUserInfo({ data: { ...data, username: user }, loading: false, error: null });
  };

  useEffect(() => {
    setUserInfo((prevInfo) => {
      return { ...prevInfo, error: null, loading: true };
    });

    getUserInfo();
  }, [user]);

  return userInfo;
}

export default useGetUserInfo;
