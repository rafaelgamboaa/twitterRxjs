import { useEffect, useState } from "react";
import { followManagerService } from "../../services/followManager.service";

function UserInfo({  userName, name, photo }) {
  const [ isFollowing, setIsFollowing] = useState(false);
  const subscription$ = followManagerService.getFollow();
  const follow$ = followManagerService;


  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassname = isFollowing ? 'tw-followCard-button-followed' : 'tw-followCard-button'

  useEffect(() => {
    subscription$.subscribe(data => {
      console.log(data);
    });
  })

  const handleClick = (accountName) => {
    if (isFollowing === false) {
      follow$.setFollow(`Has seguido a ${accountName}`);
    } else {
      follow$.setFollow(`Has dejado de seguir a ${accountName}`);
    }
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
          <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar"
            src={photo}
            alt="photo" />
            <div className="tw-followCard-info">
              <strong>{name}</strong>
              <span className="tw-followCard-userName">{userName}</span>
            </div>
          </header>
          <aside className="tw-followCard-aside">
            <button className={buttonClassname} onClick={() => handleClick(userName)}>
              <span className="tw-followCard-follow">{text}</span>
              <span className="tw-followCard-unfollow">Dejar de seguir</span>
            </button>
          </aside>
    </article>
  )
}
export default UserInfo