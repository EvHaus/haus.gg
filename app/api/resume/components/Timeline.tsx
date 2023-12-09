import {
	Circle,
	StyleSheet,
	Svg,
	Text,
	View,
} from '@joshuajaco/react-pdf-renderer-bundled';
import { format } from 'date-fns';
import { WHITE } from '../utils/colors';

type PropsType = {
	color: string;
	date?: Date | null;
};

const styles = StyleSheet.create({
	dot: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: -2,
		position: 'absolute',
	},
	dotSvg: {
		zIndex: 2,
	},
	label: {
		fontWeight: 'bold',
		marginRight: 3,
		marginTop: 2,
		textAlign: 'right',
		width: 17,
	},
	line: {
		borderRightWidth: 2,
		flexGrow: 1,
		marginRight: 7,
		marginTop: -1,
		zIndex: 1,
	},
	main: {
		flexBasis: 36,
		flexGrow: 0,
		marginRight: 12,
		position: 'relative',
	},
});

const Timeline = ({ color, date }: PropsType) => (
	<View style={styles.main}>
		<View style={[styles.line, { borderRightColor: color }]} />
		<View style={styles.dot}>
			<Text style={[styles.label, { color }]}>
				{date ? format(date, 'yyyy') : 'Now'}
			</Text>
			<Svg height='16' style={styles.dotSvg} width='16'>
				<Circle cx='8' cy='8' fill={WHITE} r='8' />
				<Circle cx='8' cy='8' fill={color} r='6' />
			</Svg>
		</View>
	</View>
);

export default Timeline;
