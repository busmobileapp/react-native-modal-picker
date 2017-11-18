'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const PADDING = 15;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = '#758da3';
const OPTION_CONTAINER_HEIGHT = 400;

export default StyleSheet.create({

    overlayStyle: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },

    optionContainer: {
        flex: 1,
        margin: 30,
        backgroundColor:'#ffffff'
    },

    selectStyle: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        borderRadius: BORDER_RADIUS
    },

    selectTextStyle: {
        color: '#333',
        fontSize: FONT_SIZE
    },

    optionStyle: {
        padding: PADDING,
        borderBottomWidth: 0.4,
        borderBottomColor: '#ccc'
    },

    optionTextStyle: {
        fontSize: FONT_SIZE,
        color: HIGHLIGHT_COLOR
    },

    sectionStyle: {
        padding: PADDING * 2,
        borderBottomWidth: 0.4,
        borderBottomColor: '#ccc'
    },

    sectionTextStyle: {
        fontSize: FONT_SIZE
    }
});