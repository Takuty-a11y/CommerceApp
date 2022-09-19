import UserProfile from "components/organisms/UserProfile";
import useUser from "services/users/use-user";
import { ApiContext, User } from "types";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

interface UserProfileContainerProps {
  /**
   * ユーザーID
   */
  userId: number;
  /**
   * 初期で表示するユーザー
   */
  user?: User;
}

const UserProfileContainer = (props: UserProfileContainerProps) => {
  // 最新のユーザー情報を取得し、更新があった場合には
  // initialで指定されているデータを上書きする
  const { userId, user } = props;
  const { user: u } = useUser(context, { id: userId, initial: user });

  if (!u) return <div>Loading...</div>;
  return (
    <UserProfile
      username={`${u.username} (${u.displayName})`}
      profileImageUrl={u.profileImageUrl}
      numberOfProducts={100}
      description={u.description}
    />
  );
};

export default UserProfileContainer;
