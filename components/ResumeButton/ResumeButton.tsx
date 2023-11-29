import styles from './ResumeButton.module.css';

export const ResumeButton = () => (
	<a
		className={styles.main}
		// href='/ev-haus-resume.pdf'
		href='/api/resume'
		rel='noreferrer'
		target='_blank'
	>
		My Resume
	</a>
);

export default ResumeButton;
