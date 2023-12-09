import { StyleSheet, Text, View } from '@joshuajaco/react-pdf-renderer-bundled';
import { BLACK, PURPLE } from '../utils/colors';

type PropsType = {
	children: string;
	theme?: 'dark' | 'light';
};

const styles = StyleSheet.create({
	dark: { borderLeftColor: PURPLE },
	light: { borderLeftColor: BLACK },
	main: {
		borderLeftWidth: 8,
		fontSize: 12,
		lineHeight: 0,
		paddingLeft: 24 - 8,
		textTransform: 'uppercase',
	},
});

const SectionTitle = ({ children, theme = 'light' }: PropsType) => (
	<View style={[styles.main, styles[theme]]}>
		<Text>{children}</Text>
	</View>
);

export default SectionTitle;
