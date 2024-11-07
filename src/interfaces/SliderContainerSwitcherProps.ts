import { Dispatch, SetStateAction } from "react";
import SliderComponentProps from "@/interfaces/SliderComponentProps";

type SliderContainerSwitcherProps = {
  contentTypeID: number;
  setContentTypeID: Dispatch<SetStateAction<number>>;
  title?: string;
  description: string;
  baseURL: string;
  content: SliderComponentProps[];
};

export default SliderContainerSwitcherProps;
