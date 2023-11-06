import React from "react";
import style from "./NewsCardHead.module.scss";

type NewsCardHeadProps = {
  headerTitle?: string;
  headerColor?: string;
};

const DEFAULT_HEADER_COLOR = "#000000";

export const NewsCardHead = ({
  headerTitle,
  headerColor,
}: NewsCardHeadProps) => (
  <div
    className={style.cardHead}
    style={{
      backgroundColor: headerColor ?? DEFAULT_HEADER_COLOR,
    }}
  >
    {headerColor && <p>{headerTitle}</p>}
  </div>
);

export default NewsCardHead;
