import {StyleSheet, Text} from '@react-pdf/renderer';
import React from 'react';
import {YELLOW} from '../utils/colors';

const styles = StyleSheet.create({
	main: { color: YELLOW },
});

const Pipe = () => (
	<Text style={styles.main}> | </Text>
);

export default Pipe;
