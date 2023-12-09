import { StyleSheet, Text } from '@joshuajaco/react-pdf-renderer-bundled';
import { YELLOW } from '../utils/colors';

const styles = StyleSheet.create({
	main: { color: YELLOW },
});

const Pipe = () => <Text style={styles.main}> | </Text>;

export default Pipe;
