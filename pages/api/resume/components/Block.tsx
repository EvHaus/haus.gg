import {type Style, StyleSheet, View} from '@react-pdf/renderer';
import React from 'react';

type PropsType = {
	children: React.ReactNode,
	style?: Style,
};

const styles = StyleSheet.create({
	main: {
		flexDirection: 'row',
		fontSize: 9,
		paddingBottom: 1,
		paddingLeft: 12,
	},
});

const Block = ({children, style}: PropsType) => (
	<View style={[styles.main, style ? style : {}]}>
		{children}
	</View>
);

export default Block;
