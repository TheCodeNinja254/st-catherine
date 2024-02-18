import { Dispatch, SetStateAction } from "react";

type SliderContainerSwitcherProps = {
  contentTypeID: number;
  setContentTypeID: Dispatch<SetStateAction<number>>;
};

export default SliderContainerSwitcherProps;
