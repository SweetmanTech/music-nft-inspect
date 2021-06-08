import React from "react";
import {
  useZNFT,
  useNFTMetadata,
  useNFTType,
  useNFTMetadataType,
} from "@zoralabs/nft-hooks";

import { NFTDataContext } from "./NFTDataContext";

export type ZNFTDataProviderProps = {
  id: string;
  children: React.ReactNode;
  initialData?: {
    nft?: useNFTType["data"];
    metadata?: useNFTMetadataType["metadata"];
  };
};


export const ZNFTDataProvider = ({
  id,
  children,
  initialData,
}: ZNFTDataProviderProps) => {
  const { nft: nftInitial, metadata: metadataInitial } = initialData || {};
  const nft = useZNFT(id, { loadCurrencyInfo: true, initialData: nftInitial });
  const metadata = useNFTMetadata(nft.data?.nft.metadataURI, metadataInitial);

  return (
    <NFTDataContext.Provider value={{ nft, metadata }}>
      {children}
    </NFTDataContext.Provider>
  );
};