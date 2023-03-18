const palette = {
    main1: "#f0f0f0",
    main2: "#90e0ef",
    main3: "#0077b6",
    main4: "#000c3c",
};

export const dark = {
    background: palette.main3,
    foreground: palette.main2,
    border: palette.main4,
    text: palette.main4,
    crossword: {
        columnBreakpoint: "0",
        gridBackground: palette.main4,
        cellBackground: palette.main1,
        cellBorder: palette.main4,
        textColor: palette.main4,
        numberColor: palette.main4,
        focusBackground: palette.main3,
        highlightBackground: palette.main2,
    },
};
