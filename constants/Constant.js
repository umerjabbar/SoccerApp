// Store constants
import { Dimensions, PixelRatio, NativeModules } from 'react-native';
import oddslib from 'oddslib';

const { StatusBarManager } = NativeModules;
const devHeight = 640; //Phone height during development
const devWidth = 360; //width

export const deviceHeight = Dimensions.get('window').height; //Device height
export const deviceWidth = Dimensions.get('window').width; //device width

//gain
export const RNHeight = deviceHeight / devHeight;
export const RNWidth = deviceWidth / devWidth;
//font
export const RNFont = PixelRatio.getFontScale();
//edge width
export const RNBorder = 1 / PixelRatio.get();

export const StatusBarHeight = StatusBarManager.HEIGHT;

// Theme colors
export const ThemeBackgroundColor = {
    variant_white: 'white',
    variant_lightSilver: '#f2f5fc',
    variant_gray: '#ccc',
    variant_green: '#1ed760',
};
export const ThemeFontColor = {
    active: '#000000',
    inactive: '#c5c5c5'
};
export const ThemeBorderBottomColor = '';
export const ThemeBorderBottomShadowColor = '';
export const DividerColor = '#b7b9b8';
export const SeparatorColor = '#a3a4a8';

export function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

export function getOddsFormation(value, from, to) {

    let result = 0;
    let odds = oddslib.from(from, value);

    switch (to) {
        case "D":
            result = odds.to('decimal');
            break;
        case "F":
            result = odds.to('fractional');
            break;
        case "A":
            result = odds.to('moneyline');
            break;
        default:
            result = odds.to('decimal');
    }

    return result.toString();
}
