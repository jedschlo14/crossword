const palette = {
    main0: '#f0f0f0',
    main1: '#90e0ef',
    main2: '#80b0d0',
    main3: '#0077b6',
    main4: '#004586',
    main5: '#000c3c',
};

export const dark = {
    background: palette.main3,
    foreground: palette.main1,
    border: palette.main5,
    text: palette.main5,
    textAlternate: palette.main0,
    scrollbar: palette.main2,
    button: {
        background: palette.main2,
        hover: palette.main4,
    },
    crossword: {
        columnBreakpoint: '0',
        gridBackground: palette.main5,
        cellBackground: palette.main0,
        cellBorder: palette.main5,
        textColor: palette.main5,
        numberColor: palette.main5,
        focusBackground: palette.main3,
        highlightBackground: palette.main2,
    },
};
