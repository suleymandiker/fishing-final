import Head from "next/head";
import React, { FunctionComponent } from "react";

interface Props {
  title?: string;
  description?: string;
}
const SeoHead: FunctionComponent<Props> = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title ? title : ""}</title>
      <meta name="description" content={description ? description : ""} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
  );
};

export default SeoHead;
