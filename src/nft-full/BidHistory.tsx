/** @jsx jsx */
import { jsx } from "@emotion/react";
import { PricingInfo } from "@zoralabs/nft-hooks/dist/src/fetcher/AuctionInfoTypes";
import React, { Fragment, useContext } from "react";

import { AddressView } from "../components/AddressView";
import { NFTDataContext } from "../context/NFTDataProvider";
import { useMediaContext } from "../context/useMediaContext";
import { InfoContainer } from "./InfoContainer";

const formatDate = (timestamp: string) =>
  new Date(parseInt(timestamp, 10) * 1000).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

export const BidHistory = () => {
  const { nft } = useContext(NFTDataContext);
  const { getString, getStyles } = useMediaContext();

  const getPricingString = (pricing: PricingInfo) => (
    <span {...getStyles("pricingAmount")}>
      {pricing.prettyAmount} {pricing.currency.symbol}
    </span>
  );

  const getPastBids = () => {
    const { data } = nft;
    if (!data) {
      return <Fragment />;
    }

    const currentBid = data.pricing.reserve?.currentBid
      ? [data.pricing.reserve?.currentBid]
      : [];
    const eventsList = [
      ...data.pricing.perpetual.bids,
      ...(data.pricing.reserve?.previousBids || []),
      ...currentBid,
    ].map((bid) => ({
      activityDescription: getString("BID_HISTORY_BID"),
      actor: bid.bidder.id,
      pricing: getPricingString(bid.pricing) as React.ReactNode,
      createdAt: bid.createdAtTimestamp,
    }));

    if (data.pricing.reserve?.createdAtTimestamp) {
      eventsList.push({
        activityDescription: getString("BID_HISTORY_LISTED"),
        pricing: null,
        actor: data.pricing.reserve.tokenOwner.id,
        createdAt: data.pricing.reserve.createdAtTimestamp,
      });
    }

    if (data.nft.createdAtTimestamp) {
      eventsList.push({
        activityDescription: getString("BID_HISTORY_MINTED"),
        pricing: null,
        actor: data.nft.creator.id,
        createdAt: data.nft.createdAtTimestamp,
      });
    }

    return eventsList
      .sort(({ createdAt: createdAtFirst }, { createdAt: createdAtSecond }) =>
        parseInt(createdAtFirst.createdAt, 10) >
        parseInt(createdAtSecond.createdAt, 10)
          ? 1
          : -1
      )
      .map((bidItem) => (
        <div {...getStyles("fullPageHistoryItem")} key={bidItem.createdAt}>
          <div>
            <span {...getStyles("pricingAmount")}><AddressView address={bidItem.actor} />{" "}</span>
            {bidItem.activityDescription} {bidItem.pricing}
          </div>
          <div {...getStyles("fullPageHistoryItemDatestamp")}>
            {formatDate(bidItem.createdAt)}
          </div>
        </div>
      ));
  };

  return (
    <InfoContainer titleString="NFT_HISTORY">{getPastBids()}</InfoContainer>
  );
};
