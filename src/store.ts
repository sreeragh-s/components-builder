import { create } from "zustand";

interface State {
  heading: string;
  subtitle: string;
  fontFamily: string;
  bgImage: string;
  headingColor: string;
  subtitleColor: string;
  setHeadingSize: (hSize: string) => void;
  setSubtitleSize: (subSize: string) => void;
  setFontFamily: (fontFamily: string) => void;
  setBgImage: (bgImage: string) => void;
  setHeadingColor: (hColor: string) => void;
  setSubtitleColor: (sColor: string) => void;
}

const initialState = {
  heading: "text-6xl",
  subtitle: "20px",
  fontFamily: "__className_93dff6",
  bgImage: "",
  headingColor: "#000000",
  subtitleColor: "#000000",
};

export const useStore = create<State>((set) => ({
  ...initialState,
  setHeadingSize: (hSize) => {
    set(() => ({ heading: hSize }));
  },
  setSubtitleSize: (subSize) => {
    set(() => ({ subtitle: subSize }));
  },
  setFontFamily: (fontFamily) => {
    set(() => ({ fontFamily }));
  },
  setBgImage: (bgImage) => {
    set(() => ({ bgImage }));
  },
  setHeadingColor: (hColor) => {
    set(() => ({ headingColor: hColor }));
  },
  setSubtitleColor: (sColor) => {
    set(() => ({ subtitleColor: sColor }));
  },
}));
