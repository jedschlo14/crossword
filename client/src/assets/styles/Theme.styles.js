const palette = {
    main0: '#f0f0f0',
    main1: '#90e0ef',
    main2: '#80b0d0',
    main3: '#0077b6',
    main4: '#000c3c',
};

export const dark = {
    background: palette.main3,
    foreground: palette.main1,
    border: palette.main4,
    text: palette.main4,
    textAlternate: palette.main0,
    scrollbar: palette.main2,
    button: {
        background: palette.main0,
        hover: palette.main1,
    },
    crossword: {
        columnBreakpoint: '0',
        gridBackground: palette.main4,
        cellBackground: palette.main0,
        cellBorder: palette.main4,
        textColor: palette.main4,
        numberColor: palette.main4,
        focusBackground: palette.main3,
        highlightBackground: palette.main2,
    },
};
