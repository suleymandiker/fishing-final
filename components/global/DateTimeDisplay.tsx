import React, { FunctionComponent } from "react";
import { css } from "@emotion/react";

interface Props {
  days?: any;
  hours: any;
  minutes: any;
  seconds: any;
}

const DateTimeDisplay: FunctionComponent<Props> = ({
  days = "",
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div css={styles.date_time_display}>
      {days > 0 && false && (
        <>
          <span className="days">{days}</span>
          <span className="colon">d </span>
        </>
      )}

      <span className="hours">{String(hours).padStart(2, "0")}</span>
      <span className="colon">:</span>
      <span className="minutes">{String(minutes).padStart(2, "0")}</span>
      <span className="colon">:</span>
      <span className="seconds">{String(seconds).padStart(2, "0")}</span>
    </div>
  );
};

export default DateTimeDisplay;

const styles = {
  date_time_display: css`
    .days,
    .hours,
    .minutes,
    .seconds,
    .colon {
      margin-right: 2px;
      color: #93acd7 !important;
      font-family: "Russo" !important;
    }
    .days {
      color: white !important;
    }
  `,
};
