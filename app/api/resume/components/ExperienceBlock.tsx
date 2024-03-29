import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import { formatDuration, intervalToDuration } from 'date-fns';
import type { RoleItemType } from '../types';
import Block from './Block';
import ListItem from './ListItem';
import Timeline from './Timeline';

type PropsType = {
	item: RoleItemType;
};

const styles = StyleSheet.create({
	companyName: {
		fontWeight: 500,
		marginRight: 6,
	},
	content: {
		flexGrow: 1,
		maxWidth: 300,
	},
	header: {
		flexDirection: 'row',
	},
	link: {
		textDecoration: 'none',
	},
	role: {
		marginTop: 12,
	},
	roleLast: {
		marginBottom: 12,
	},
	titleName: {
		fontWeight: 500,
		marginRight: 2,
	},
});

const ExperienceBlock = ({ item }: PropsType) => {
	const { about, colors, company, roles, url } = item;
	const website = url.replace('https://', '').replace('/', '');
	return (
		<Block>
			<Timeline color={colors[0]} date={roles[0].date[1]} />
			<View style={styles.content}>
				<View style={styles.header}>
					<Text style={[styles.companyName, { color: colors[0] }]}>
						{company}
					</Text>
					<Link src={website} style={styles.link}>
						<Text style={{ color: colors[1] }}>&mdash; {website}</Text>
					</Link>
				</View>
				<Text>{about}</Text>
				{roles.map(({ accomplishments, date, dateNote, title }, i) => (
					<View
						key={title}
						style={[styles.role, i === roles.length - 1 ? styles.roleLast : {}]}
					>
						<View style={styles.header}>
							<Text style={styles.titleName}>{title}</Text>
							<Text>
								(
								{formatDuration(
									intervalToDuration({
										end: date[1] || new Date(),
										start: date[0],
									}),
									{ format: ['years', 'months'] },
								)}
								{date[1] === null ? ' and counting' : null}
								{dateNote ? `, ${dateNote}` : null})
							</Text>
						</View>
						{accomplishments.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</View>
				))}
			</View>
		</Block>
	);
};

export default ExperienceBlock;
