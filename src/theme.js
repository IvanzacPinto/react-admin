import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";



export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            primary: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            grey: {
                100: "#ccf4ed",
                200: "#99e9dc",
                300: "#66dfca",
                400: "#33d4b9",
                500: "#00c9a7",
                600: "#00a186",
                700: "#007964",
                800: "#005043",
                900: "#002821"
            },
            greenAccent: {
                100: "#f3fefc",
                200: "#e7fef9",
                300: "#dcfdf5",
                400: "#d0fdf2",
                500: "#c4fcef",
                600: "#9dcabf",
                700: "#76978f",
                800: "#4e6560",
                900: "#273230"
            },
            redAccent: {
                100: "#dbe6e4",
                200: "#b8ccc8",
                300: "#94b3ad",
                400: "#719991",
                500: "#4d8076",
                600: "#3e665e",
                700: "#2e4d47",
                800: "#1f332f",
                900: "#0f1a18"
            },
            blueAccent: {
                100: "#e6dff3",
                200: "#cebfe7",
                300: "#b59eda",
                400: "#9d7ece",
                500: "#845ec2",
                600: "#6a4b9b",
                700: "#4f3874",
                800: "#35264e",
                900: "#1a1327"
            },
        } : {
            primary: {
                100: "#141414",
                200: "#292929",
                300: "#3d3d3d",
                400: "#525252",
                500: "#666666",
                600: "#858585",
                700: "#a3a3a3",
                800: "#c2c2c2",
                900: "#e0e0e0",
            },
            grey: {
                100: "#002821",
                200: "#005043",
                300: "#007964",
                400: "#00a186",
                500: "#00c9a7",
                600: "#33d4b9",
                700: "#66dfca",
                800: "#99e9dc",
                900: "#ccf4ed",
            },
            greenAccent: {
                100: "#273230",
                200: "#4e6560",
                300: "#76978f",
                400: "#9dcabf",
                500: "#c4fcef",
                600: "#d0fdf2",
                700: "#dcfdf5",
                800: "#e7fef9",
                900: "#f3fefc",
            },
            redAccent: {
                100: "#0f1a18",
                200: "#1f332f",
                300: "#2e4d47",
                400: "#3e665e",
                500: "#4d8076",
                600: "#719991",
                700: "#94b3ad",
                800: "#b8ccc8",
                900: "#dbe6e4",
            },
            blueAccent: {
                100: "#1a1327",
                200: "#35264e",
                300: "#4f3874",
                400: "#6a4b9b",
                500: "#845ec2",
                600: "#9d7ece",
                700: "#b59eda",
                800: "#cebfe7",
                900: "#e6dff3",
            },
        })

})

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.primary[500],
                    },
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }
            ),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode];
}

