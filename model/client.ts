import useLocalStorage from "@/hooks/use-local-storage";

import { FramesFormPropsValue } from "./frames-schema";

export const useDefaultIssueFormValues = () => {
  return useLocalStorage("defaultFormValues", {
    id: "1",
    name: "",
    group: "",
    act: "",
    code: "",
    codeDuplicate: false,
    rarity: 1,
    image: new File([""], "filename"),
  });
};

export const useDefaultFrameFormValues = () => {
  return useLocalStorage("defaultFrameFormValues", {
    id: "1",
    name: "",
    code: "",
    codeDuplicate: false,
    rarity: "Common",
    image: new File([""], "filename"),
  } as FramesFormPropsValue);
};
