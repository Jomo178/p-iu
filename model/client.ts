import useLocalStorage from "@/hooks/use-local-storage";

export const useDefaultFormValues = () => {
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
