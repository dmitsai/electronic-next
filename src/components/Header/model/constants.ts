export const HeaderMode = {
    WHITE: 'WHITE',
    BLUE: 'BLUE',
} as const;

export type HeaderModeType = (typeof HeaderMode)[keyof typeof HeaderMode];