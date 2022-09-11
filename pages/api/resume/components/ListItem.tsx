import {StyleSheet, Text, View} from '@react-pdf/renderer';
import React from 'react';

type PropsType = {
	children: string,
};

const styles = StyleSheet.create({
	bullet: {
		flexGrow: 0,
		marginRight: 2,
	},
	main: {
		flexDirection: 'row',
	},
});

const ListItem = ({
	children,
}: PropsType) => (
	<View style={styles.main}>
		<View style={styles.bullet}><Text>&bull;</Text></View>
		<Text>{children}</Text>
	</View>
);

export default ListItem;
