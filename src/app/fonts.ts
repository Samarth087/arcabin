import localFont from "next/font/local"

export const fraunces = localFont({
  src: [
    { path: "../../public/fonts/Fraunces_72pt-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/Fraunces_72pt-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "../../public/fonts/Fraunces_72pt-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Fraunces_72pt-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "../../public/fonts/Fraunces_72pt-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Fraunces_72pt-Italic.ttf", weight: "400", style: "italic" },

    { path: "../../public/fonts/Fraunces_72pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Fraunces_72pt-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "../../public/fonts/Fraunces_72pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Fraunces_72pt-BoldItalic.ttf", weight: "700", style: "italic" },

    { path: "../../public/fonts/Fraunces_72pt-Black.ttf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Fraunces_72pt-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
})

export const roboto = localFont({
  src: [
    { path: "../../public/fonts/Roboto-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "../../public/fonts/Roboto-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/Roboto-ExtraLightItalic.ttf", weight: "200", style: "italic" },

    { path: "../../public/fonts/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Roboto-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "../../public/fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Roboto-Italic.ttf", weight: "400", style: "italic" },

    { path: "../../public/fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "../../public/fonts/Roboto-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Roboto-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "../../public/fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic" },

    { path: "../../public/fonts/Roboto-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Roboto-ExtraBoldItalic.ttf", weight: "800", style: "italic" },

    { path: "../../public/fonts/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Roboto-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-roboto",
  display: "swap",
})
