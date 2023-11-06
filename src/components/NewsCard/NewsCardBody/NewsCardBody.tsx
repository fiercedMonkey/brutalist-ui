import React from "react";
import style from "./NewsCardBody.module.scss";

type NewsCardBodyProps = {
  timestamp?: string;
  contentTitle?: string;
  content: string;
};

export const NewsCardBody = ({
  timestamp,
  contentTitle,
  content,
}: NewsCardBodyProps) => (
  <div className={style.cardBody}>
    {timestamp && <p className={style.timestamp}>{timestamp}</p>}
    {contentTitle && <h3>{contentTitle}</h3>}
    <p>{content}</p>
  </div>
);

export default NewsCardBody;
