import FriendListItem from "./FriendListItem";

export default function FriendList(props) {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
}
