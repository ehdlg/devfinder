import { toast } from 'sonner';
import dayjs from 'dayjs';
import useGetUserInfo from '../hooks/useGetUserInfo';
import { useEffect } from 'react';
import { NOT_AVAILABLE, USER_FOOTER_INFO } from '../constants';
import { IUserInfo } from '../types';

function UserInfo({ user }: { user: string }) {
  const { data: userInfo, error, loading } = useGetUserInfo(user);

  useEffect(() => {
    if (error !== null && !loading) {
      toast.error(error);
    }
  }, [error, loading]);

  if (userInfo == null) return <section className='user-info user-info__not-loaded'></section>;
  return (
    <section className={`user-info ${loading ? 'user-info__not-loaded' : 'user-info__loaded'}`}>
      <div className='user-info__avatar'>
        <img src={userInfo.avatar_url} alt={`Github avatar from user ${userInfo.name}`} />
      </div>

      <div className='user-info__data'>
        <div className='user-info__data-first-row'>
          <div className='user-info__data-names'>
            <h2 className='user-info__data-name'>{userInfo.name}</h2>
            <h3 className='user-info__data-username'>@{userInfo.username}</h3>
          </div>
          <span className='user-info__data-joined'>
            Joined {dayjs(userInfo.created_at).format('D MMM YYYY')}
          </span>
        </div>
        <div className='user-info__data-bio'>
          <p>{userInfo.bio ? userInfo.bio : 'This profile has no bio'}</p>
        </div>

        <div className='user-info__data-stats'>
          <div className='user-info__data-stats--repos'>
            <h4 className='stats-title'>Repos</h4>
            <span className='stats-data'>{userInfo.public_repos}</span>
          </div>
          <div className='user-info__data-stats--followers'>
            <h4 className='stats-title'>Followers</h4>
            <span className='stats-data'>{userInfo.followers}</span>
          </div>
          <div className='user-info__data-stats--following'>
            <h4 className='stats-title'>Following</h4>
            <span className='stats-data'>{userInfo.following}</span>
          </div>
        </div>

        <div className='user-info__data--last-row'>
          {Object.keys(USER_FOOTER_INFO).map((key) => {
            const isAvailable =
              null !== userInfo[key as keyof IUserInfo] &&
              userInfo[key as keyof IUserInfo].toString().length > 0;

            const IconComponent = USER_FOOTER_INFO[key as keyof typeof USER_FOOTER_INFO];

            return (
              <div className={`${isAvailable ? '' : 'not-available'}`}>
                <IconComponent />
                <span>
                  {isAvailable ? (userInfo[key as keyof IUserInfo] as string) : NOT_AVAILABLE}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UserInfo;
