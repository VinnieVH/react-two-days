import React from "react";
import styled from "styled-components";

type IconProps = {
  icon: any;
  title: string;
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  size?: string;
};
export const Icon = (props: IconProps) => {
  return <IconWrapper {...props}>{props.icon !== undefined && <props.icon aria-label={props.title} />}</IconWrapper>;
};
const IconWrapper = styled.div<{
  size?: string;
  height?: string;
  width?: string;
  stroke?: string;
  fill?: string;
}>`
  height: ${(props) => (props.size ? props.size : props.height)};
  width: ${(props) => (props.size ? props.size : props.width)};
  * {
    fill: ${(props) => props.fill};
    color: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
  }
  svg {
    fill: ${(props) => props.fill};
    height: ${(props) => (props.size ? props.size : props.height)};
    width: ${(props) => (props.size ? props.size : props.width)};
  }
`;
