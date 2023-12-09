import {
	Circle,
	Defs,
	Document,
	Font,
	LinearGradient,
	Link,
	Page,
	Rect,
	Stop,
	StyleSheet,
	Svg,
	Text,
	View,
	renderToStream,
} from '@joshuajaco/react-pdf-renderer-bundled';
import EducationBlock from './components/EducationBlock';
import ExperienceBlock from './components/ExperienceBlock';
import Pipe from './components/Pipe';
import SectionTitle from './components/SectionTitle';
import type { RoleItemType } from './types';
import {
	AQUA,
	BLACK,
	BLUE,
	BLUE_DARK,
	BLUE_LIGHT,
	PINK,
	PURPLE,
	PURPLE_DARK,
	RED,
	RED_DARK,
	WHITE,
} from './utils/colors';

Font.register({
	family: 'Roboto',
	fonts: [
		{
			src: 'https://github.com/google/fonts/blob/37b75bee5de7fc015aceb958215cddaebfec54d6/apache/roboto/static/RobotoCondensed-Regular.ttf?raw=true',
		},
		{
			fontWeight: 300,
			src: 'https://github.com/google/fonts/blob/37b75bee5de7fc015aceb958215cddaebfec54d6/apache/roboto/static/RobotoCondensed-Light.ttf?raw=true',
		},
		{
			fontWeight: 500,
			src: 'https://github.com/google/fonts/blob/37b75bee5de7fc015aceb958215cddaebfec54d6/apache/roboto/static/RobotoCondensed-Medium.ttf?raw=true',
		},
	],
});

const styles = StyleSheet.create({
	address: {
		marginBottom: 24,
		marginTop: 24,
	},
	contact: {
		color: AQUA,
		textTransform: 'uppercase',
	},
	experiences: {
		marginVertical: 12,
	},
	h1: {
		fontSize: 24,
	},
	header: {
		paddingHorizontal: 24,
		paddingVertical: 20,
	},
	link: {
		textDecoration: 'none',
	},
	main: {
		flexGrow: 1,
		paddingRight: 24,
	},
	mainContent: {
		maxWidth: 370,
	},
	page: {
		color: BLACK,
		flexDirection: 'row',
		fontFamily: 'Roboto',
		letterSpacing: -0.25,
		lineHeight: 1.25,
	},
	sidebar: {
		color: WHITE,
		flexBasis: 220,
		flexGrow: 0,
		flexShrink: 0,
		fontSize: 11,
	},
	sidebarBackground: {
		position: 'absolute',
	},
	sidebarFooterText: {
		color: AQUA,
		marginTop: 12,
	},
	sidebarSection: {
		paddingHorizontal: 24,
		paddingVertical: 16,
	},
	sidebarSections: {
		paddingBottom: 24,
		paddingTop: 24,
	},
	sidebarText: {
		fontSize: 10,
		fontWeight: 300,
		lineHeight: 1.4,
	},
	title: {
		color: BLUE_LIGHT,
		textTransform: 'uppercase',
	},
	website: {
		color: PINK,
		fontWeight: 300,
	},
	websiteBold: {
		fontWeight: 500,
	},
});

const EXPERIENCE: Array<RoleItemType> = [
	{
		about:
			'Zenhub is a productivity platform SaaS business with around 50 employees. As a member of the leadership team, I am responsible for everything relating to engineering. The product is shipped to Cloud & On-Premise customers.',
		colors: [BLUE, BLUE_DARK],
		company: 'Zenhub',
		roles: [
			{
				accomplishments: [
					'Responsible for engineering due diligence as the company secured $6M in seed and $10M in Series A funding.',
					'Led hiring & onboarding of hybrid/remote team of ~25 engineers & managers.',
					'Established a culture of ownership, individual responsibility, and personal growth',
					'Setup engineering KPIs, monitored performance, throughput, velocity, and optimized internal workflows and culture to improve those metrics',
					'Released a large number of core product features & technical migrations.',
					'Oversaw the modernization of legacy systems with minimal downtime for customers (our tech stack is React, GraphQL, Ruby on Rails, and Kubernetes)',
					'Shipped production code, mostly focused on optimizing our internal systems, technical debt, and customer retention.',
					'Worked with marketing team to raise brand awareness by writing technical articles, appearing on podcasts and giving conference talks.',
					'Contributed to & embraced open source initiatives to drive internal goals.',
					'Established a DevOps team and completed SOC2 Type 2 certification.',
				],
				date: [new Date(2019, 8, 9), null],
				title: 'Head of Technology',
			},
		],
		url: 'https://www.zenhub.com/',
	},
	{
		about:
			'Cumul8 (subsidiary of Eight Solutions) was a public media technology company that initially focused on software products for the visual effects industry. Over my 7 years there, the company has pivoted to focus on big data and industrial IoT for Enterprise.',
		colors: [PURPLE, PURPLE_DARK],
		company: 'Cumul8 Technologies Inc.',
		roles: [
			{
				accomplishments: [
					'Led the managed a software team of 20 devs (mix of remote & in-house).',
					'Influenced product strategy, roadmaps, and provided technical guidance to CEO.',
					'Drove the automation and QA efforts and coordinated outsourced vendors.',
					'Steered engineering initiatives; identified & filed patent applications.',
					'Created and refined software patterns and engineering best-practices.',
					'Oversaw the DevOps team and helped refine the cloud infrastructure.',
					// 'Engaged with partners and customers to lead technical conversations and audits.',
					// 'Continued to be a hands-on coder, shipping many client-facing product features.',
				],
				date: [new Date(2016, 9, 12), new Date(2019, 4, 23)],
				title: 'Technical Director',
			},
			{
				accomplishments: [
					'Influenced the hiring strategy and grew the team from 3 to 12 developers',
					'Assisted the senior management team in securing and executing on client contracts.',
					'Built and maintained the microservices software architecture platform',
					'Architected the React-based implementation of the Cumul8 BI analytics platform.',
					'Acted as representative for the company at local tech meetups and conferences.',
				],
				date: [new Date(2015, 3, 22), new Date(2016, 9, 12)],
				title: 'Lead Developer / Programmer',
			},
		],
		url: 'https://www.cumul8.com/',
	},
	{
		about: `A design and development consulting firm that I've been running in my spare time.`,
		colors: [RED, RED_DARK],
		company: 'Globex Designs, Inc.',
		roles: [
			{
				accomplishments: [
					'Designed & developed a variety of media projects for over 100 international clients.',
					'Development of custom in-house bug tracking, project management, scheduling, billing and invoice web app using Dojo Toolkit & PHP.',
					'Created and developed the Google Redesigned browser extension which, at its peak, was used by over 250,000 concurrent users. I built the underlying infrastructure too.',
					'Together with Lexan Software Inc, I was the art director and project manager for the iOS/Android game -- Tesseric.',
				],
				date: [new Date(1999, 5, 1), new Date(2011, 12, 1)],
				dateNote: 'part-time',
				title: 'Founder/CEO',
			},
		],
		url: 'https://www.globexdesigns.com/',
	},
];

const buildReport = () => {
	const Resume = () => (
		<Document
			author='Ev Haus'
			creator='Ev Haus'
			producer='Ev Haus'
			title='Resume | Ev Haus'
		>
			<Page size='LETTER' style={styles.page}>
				<View style={styles.main}>
					<View style={styles.mainContent}>
						<View style={styles.header}>
							<Text style={styles.h1}>Resume</Text>
						</View>
						<SectionTitle>Experience</SectionTitle>
						<View style={styles.experiences}>
							{EXPERIENCE.map((item) => (
								<ExperienceBlock item={item} key={item.company} />
							))}
						</View>
						<SectionTitle>Education</SectionTitle>
						<EducationBlock />
					</View>
				</View>
				<View style={styles.sidebar}>
					<Svg style={styles.sidebarBackground} viewBox='0 0 100 390'>
						<Defs>
							<LinearGradient id='sidebarGradient' x1='1' x2='0' y1='0' y2='1'>
								<Stop offset='0%' stopColor='#303A6E' />
								<Stop offset='24.5%' stopColor='#3D306E' />
								<Stop offset='24.50000001%' stopColor='#2A2055' />
								<Stop offset='40%' stopColor='#33295E' />
								<Stop offset='100%' stopColor='#20213C' />
							</LinearGradient>
							<LinearGradient
								id='sidebarCircleGradient'
								x1='1'
								x2='0'
								y1='0'
								y2='1'
							>
								<Stop offset='0%' stopColor='#000' stopOpacity='0.25' />
								<Stop offset='85%' stopColor='#000' stopOpacity='0' />
							</LinearGradient>
						</Defs>

						<Rect fill="url('#sidebarGradient')" height='100%' width='100%' />
						<Circle
							cx='95'
							cy='65'
							fill="url('#sidebarCircleGradient')"
							r='40'
						/>
					</Svg>
					<View style={styles.sidebarSection}>
						<Text style={styles.h1}>Ev Haus</Text>
						<Text style={styles.title}>
							CTO <Pipe /> Technical Director
						</Text>
						<View style={styles.address}>
							<Text style={styles.contact}>Vancouver, Canada</Text>
							<Text style={styles.contact}>(604) 720-8549</Text>
							<Link src='mailto:ev@haus.gg' style={styles.link}>
								<Text style={styles.contact}>ev@haus.gg</Text>
							</Link>
						</View>
						<Link src='https://haus.gg' style={styles.link}>
							<Text style={styles.website}>
								www.<Text style={styles.websiteBold}>haus.gg</Text>
							</Text>
						</Link>
						<Link src='https://github.com/EvHaus' style={styles.link}>
							<Text style={styles.website}>
								www.github.com/<Text style={styles.websiteBold}>EvHaus</Text>
							</Text>
						</Link>
						<Link src='https://linkedIn.com/in/EvHaus' style={styles.link}>
							<Text style={styles.website}>
								www.linkedIn.com/in/
								<Text style={styles.websiteBold}>EvHaus</Text>
							</Text>
						</Link>
					</View>
					<View style={styles.sidebarSections}>
						<SectionTitle theme='dark'>Tech I Know Really Well</SectionTitle>
						<View style={[styles.sidebarSection, styles.sidebarText]}>
							<Text>
								JavaScript <Pipe /> TypeScript <Pipe /> Node.js
							</Text>
							<Text>
								React <Pipe /> Redux <Pipe /> Next.js
							</Text>
							<Text>
								HTML <Pipe /> CSS
							</Text>
						</View>
						<SectionTitle theme='dark'>
							Tech I&apos;ve Used Professionally
						</SectionTitle>
						<View style={[styles.sidebarSection, styles.sidebarText]}>
							<Text>
								GraphQL <Pipe /> Apollo <Pipe /> React Native
							</Text>
							<Text>
								Python <Pipe /> Go <Pipe /> Ruby on Rails <Pipe /> PHP
							</Text>
							<Text>
								Kubernetes <Pipe /> Terraform <Pipe /> AWS <Pipe /> GCP
							</Text>
							<Text>
								MySQL <Pipe /> PostgreSQL <Pipe /> MongoDB
							</Text>
							<Text>
								Photoshop <Pipe /> Figma <Pipe /> Sketch <Pipe /> Abstract
							</Text>
						</View>
						<SectionTitle theme='dark'>Open Source Contributions</SectionTitle>
						<View style={[styles.sidebarSection, styles.sidebarText]}>
							<Text>
								React <Pipe /> ESlint <Pipe /> Meteor <Pipe /> jQuery <Pipe />{' '}
								Dojo
							</Text>
							<Text>
								Backbone <Pipe /> Brackets <Pipe /> Firefox
							</Text>
						</View>
						<SectionTitle theme='dark'>A Bit About Me</SectionTitle>
						<View style={[styles.sidebarSection, styles.sidebarText]}>
							<Text>
								I&apos;m a self-taught coder, a professionally trained designer,
								animator and musician. I&apos;ve been working with web
								applications since the early 2000s in a variety of roles. I am
								obsessed with high quality, attention to detail and efficiency.
								I strive for balance and rationale in my decisions, and I&apos;m
								constantly learning. Most of my experience is at small start-ups
								helping them realize their full potential.
							</Text>
						</View>
						<View
							style={[
								styles.sidebarSection,
								styles.sidebarText,
								styles.sidebarFooterText,
							]}
						>
							<Text>
								For references, additional information or a complete portfolio
								of works please contact me at ev@haus.gg
							</Text>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	);

	return <Resume />;
};

export async function GET() {
	const filename = 'ev-haus-resume.pdf';

	// Generate resume
	const generatedPdf = buildReport();
	const output = (await renderToStream(
		generatedPdf,
	)) as unknown as ReadableStream;

	return new Response(output, {
		status: 200,
		headers: {
			'Content-Disposition': `inline;filename="${filename}"`,
			'Content-Type': 'application/pdf',
		},
	});
}
