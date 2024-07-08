const palette = {
    main0: '#f0f0f0',
    main1: '#90e0ef',
    main2: '#80b0d0',
    main3: '#0077b6',
    main4: '#004586',
    main5: '#000c3c',
    special1: '#FF8B8B',
    special2: '#EB4747',
};

export const dark = {
    background: palette.main3,
    foreground: palette.main1,
    border: palette.main5,
    text: palette.main5,
    textAlternate: palette.main0,
    scrollbar: palette.main2,
    tree: {
        hover: palette.main2,
        selected: palette.main3,
    },
    button: {
        background: palette.main2,
        hover: palette.main4,
        special: {
            background: palette.special1,
            hover: palette.special2,
        },
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
