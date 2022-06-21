import React, { FC, LinkHTMLAttributes } from "react";

type Props = LinkHTMLAttributes<Element> & {
  prefetch?: boolean;
  imagesrcset?: string;
  imagesizes?: string;
};

type FontProps = Props & {
  type?: "font/ttf";
};

const Preload: FC<Props> = ({ prefetch, ...props }: Props) => (
  <link rel={prefetch ? "prefetch" : "preload"} {...props} />
);

const StylePreload: FC<Props> = (props: Props) => (
  <Preload as="style" {...props} />
);

const FontPreload: FC<FontProps> = ({
  type = "font/ttf",
  ...props
}: FontProps) => <Preload as="font" type={type} crossOrigin="" {...props} />;

export { Preload, StylePreload, FontPreload };
