import { useState, useEffect } from 'react';

function useGetUserInfo(user: string) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const URL = `https://api.github.com/users/${user}`;
    const getUserInfo = async () => {
      const fetchOptions = {
        headers: {
          'Content-Type': 'application/vnd.github+json',
        },
      };

      const response = await fetch(URL, fetchOptions);

      const data = await response.json();

      setUserInfo(data);
    };

    getUserInfo();
  }, [user]);

  return userInfo;
}

export default useGetUserInfo;
