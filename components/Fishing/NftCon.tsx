import React, { FunctionComponent, useEffect, useState } from "react";
import { css } from "@emotion/react";
import NftItem from "./NftItem";

const NftCon: FunctionComponent = () => {
  const [nftList, setNftList] = useState({ orderType: "", data: [] });
  const [filter, setFilter] = useState("all");
  const [orderType, setOrderType] = useState("highest");
  const [filterCount, setFilterCount] = useState({
    openCount: 0,
    closeCount: 0,
  });

  const setOpenCloseCount = (data: any) => {
    let obj = {
      openCount: 0,
      closeCount: 0,
    };

    data.filter((item: any) => {
      item.isOpen ? obj.openCount++ : obj.closeCount++;
    });
    setFilterCount(obj);
  };

  const dataSort = (data: any, orderType: string = "highest") => {
    console.log("run");
    data.sort(function (a: any, b: any) {
      if (orderType == "highest") {
        return b.ton - a.ton;
      } else if (orderType == "lowest") {
        return a.ton - b.ton;
      }
      return b.ton - a.ton;
    });

    return { orderType, data: data };
  };

  useEffect(() => {
    nftList?.data.length > 0 && setNftList(dataSort(nftList.data, orderType));
  }, [orderType]);

  useEffect(() => {
    let jsonData: any = {};
    jsonData = require("/locales/nft-list.json");
    jsonData && setOpenCloseCount(jsonData);
    jsonData && (jsonData = dataSort(jsonData));
    jsonData && setNftList(jsonData);
  }, []);

  return (
    <div css={styles.nft_con}>
      <div className="nft_con_bg"></div>
      <div className="btn_duty_all ">
        <div className="btn_duty_all_bg" />
        <div className="flex gap-10">
          <button className="btn-medium">
            <span className="status_on_title">ON</span> Dutty ALL
          </button>
          <button className="btn-medium">
            <span className="status_off_title">OFF </span> Dutty ALL
          </button>
        </div>
      </div>
      <div className="filters flex">
        <button
          className={
            filter == "all"
              ? "btn-medium left_radius active_filter"
              : "btn-medium left_radius"
          }
          onClick={() => setFilter("all")}
        >
          All ({filterCount.closeCount + filterCount.openCount})
        </button>
        <button
          className={
            filter == "on"
              ? "btn-medium no_radius active_filter"
              : "btn-medium no_radius"
          }
          onClick={() => setFilter("on")}
        >
          On ({filterCount.openCount})
        </button>
        <button
          className={
            filter == "off"
              ? "btn-medium right_radius active_filter"
              : "btn-medium right_radius"
          }
          onClick={() => setFilter("off")}
        >
          Off ({filterCount.closeCount})
        </button>
      </div>
      <div className="sequencer_and_pagination flex m-top-15">
        <div className="sequencer">
          <select
            name="order_by"
            onChange={(e: any) => setOrderType(e.target.value)}
          >
            <option value="highest">Highest ton</option>
            <option value="lowest">Lowest ton</option>
          </select>
          <div className="down_arrow"></div>
        </div>
        <div className="pagination flex">
          <button className="btn-small left_radius btn_page_prev disable">
            <span className="arrow_left"></span>
          </button>
          <div className="btn-small no_radius page_current">1 / 2</div>
          <button className="btn-small right_radius btn_page_next">
            <span className="arrow_right"></span>
          </button>
        </div>
      </div>
      <div className="nft_list">
        {nftList?.data.length > 0 &&
          nftList.data.map((item: any, index: number) => (
            <NftItem key={index} item={item} filter={filter} />
          ))}
      </div>
    </div>
  );
};

export default NftCon;

const styles = {
  nft_con: css`
    position: relative;
    width: 100%;
    height: auto;
    padding: 15px 0;
    border-radius: 45px;
    margin-top: 80px;
    @media only screen and (max-width: 1170px) and (min-width: 1110px) {
      padding-top: 35px;
    }
    @media only screen and (max-width: 860px) {
      padding-top: 35px;
    }
    .nft_con_bg {
      position: absolute;
      width: 80%;
      height: auto;
      inset: 0;
      left: 10%;
      background-color: var(--fishingDarkBlue);
      border-radius: 32px;
      z-index: -1;
    }
    .btn_duty_all {
      position: absolute;
      top: 0;
      right: 100px;

      width: max-content;
      transform: translateY(-50%);
      padding: 10px 5px;
      border-radius: 24px;
      background: linear-gradient(
        180deg,
        rgba(38, 129, 185, 1) 50%,
        rgba(48, 200, 205, 0) 50%
      );
      .btn-medium {
        height: 55px;
        font-size: 20px;

        .status_on_title,
        .status_off_title {
          margin-right: 10px;
        }
        .status_on_title {
          color: #6aff81;
        }
        .status_off_title {
          color: #ff4c61;
        }
      }
    }
    .filters {
      padding-left: 90px;

      .btn-medium {
        &:before {
          border-color: #233864;
        }
      }
      .active_filter {
        &:before {
          border-color: #ff6476;
        }
      }
    }
    .sequencer_and_pagination {
      width: 90%;
      padding: 5px 20px;
      margin-left: 5%;
      border-radius: 45px;
      align-items: center;
      justify-content: space-between;
      background-color: var(--fishingBlue);
      .sequencer {
        position: relative;
        border-radius: 32px;
        select {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 170px;
          height: 45px;
          margin: 0;
          padding-left: 20px;
          border: 2px solid #648aef;
          border-radius: 20px;
          background: var(--fishingDarkBlue);
          font-family: "Bebas";
          color: var(--white);
          *text-align: center;
          *text-align: -webkit-center;
          font-size: 22px;
        }
        .down_arrow {
          position: absolute;
          content: "";
          width: 15px;
          height: 15px;
          top: 4px;
          right: 20px;
          transform: translateY(50%) rotate(135deg);
          border: 3px solid white;
          border-bottom-color: transparent;
          border-left-color: transparent;
          transform-origin: center;
        }
      }
      .pagination {
        background-color: var(--fishingDarkBlue);
        padding: 4px;
        border-radius: 32px;
        .disable {
          opacity: 0.6;
          cursor: default;
          pointer-events: none;
          &:before {
            border-color: #233864;
          }
        }

        .btn_page_next,
        .btn_page_prev,
        .page_current {
          padding-left: 20px;
          padding-right: 20px;
        }
        .page_current {
          pointer-events: none;
          &:before {
            border-color: transparent;
          }
        }
      }
    }
  `,
};
