import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>
        <Link to="/">토익 영단어 (고급)</Link>
      </h1>
      <ul>
        <li>
          <Link to="/create_word">단어 추가</Link>
        </li>
        <li>
          <Link to="/create_day">Day 추가</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
