import { css } from "@emotion/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div css={styles.error_page} className="max w480">
      <h1 className="t-center white">oops!</h1>
      <Link href="/">
        <a className="btn t-center ">Go Home</a>
      </Link>
    </div>
  );
}

const styles = {
  error_page: css`
    position: relative;
    top: 320px;
    margin-bottom: 820px;
    a  {
      left: 50%;
      transform: translateX(-50%);
    }
  `,
};
