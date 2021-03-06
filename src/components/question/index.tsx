import { ReactNode } from "react";
import cx from "classnames";

import "./styles.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "question",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered}
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info-content">
          <div className="user-info">
            <img src={author.avatar} alt={author.name} />
            <p>{author.name}</p>
          </div>
          <div>{children}</div>
        </div>
      </footer>
    </div>
  );
}
