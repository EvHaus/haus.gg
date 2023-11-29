import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { ORANGE } from '../utils/colors';
import Block from './Block';
import Timeline from './Timeline';

const styles = StyleSheet.create({
	content: {
		flexGrow: 1,
		maxWidth: 300,
	},
	header: {
		flexDirection: 'row',
	},
	main: {
		marginTop: 12,
	},
	schoolName: {
		fontWeight: 500,
		marginRight: 6,
	},
	titleName: {
		fontWeight: 500,
		marginRight: 2,
	},
});

const EducationBlock = () => (
	<Block style={styles.main}>
		<Timeline color={ORANGE} date={new Date(2010, 4, 1)} />
		<View style={styles.content}>
			<View style={styles.header}>
				<Text style={styles.schoolName}>
					Emily Carr University of Art + Design
				</Text>
				<Text>Vancouver, Canada.</Text>
			</View>
			<Text>Bachelor of Media Arts with a major in Animation (BMA).</Text>
		</View>
	</Block>
);

export default EducationBlock;
