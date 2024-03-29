import clsx from "clsx";
import css from "../Profile/Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div>
        <img className={css.bg} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.textFirst}>{tag}</p>
        <p className={css.textSecond}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.spanName}>Followers</span>
          <span className={css.spanCount}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.spanName}>Views</span>
          <span className={css.spanCount}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.spanName}>Likes</span>
          <span className={css.spanCount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
