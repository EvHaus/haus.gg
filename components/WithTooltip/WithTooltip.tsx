import {
	type Coords,
	FloatingPortal,
	type Placement,
	arrow,
	autoPlacement,
	autoUpdate,
	offset,
	shift,
	useDismiss,
	useFloating,
	useHover,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';
import { cloneElement, forwardRef, useMemo, useRef, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
import styles from './WithTooltip.module.css';

type PropsType = {
	children: JSX.Element;
	// Force placement
	placement?: Placement;
	// This is the body of the tooltip
	tooltip?: React.ReactNode | null;
};

const ARROW_SIZE = 4;

const getArrowStyle = (
	arrow: Partial<Coords> | undefined,
	placement: Placement,
) => {
	const arrowX = arrow?.x || 0;
	const arrowY = arrow?.y || 0;

	switch (placement) {
		case 'left':
			return {
				right: arrowX - ARROW_SIZE,
				top: arrowY,
			};
		case 'right':
			return {
				left: arrowX - ARROW_SIZE,
				top: arrowY,
			};
		case 'bottom':
			return {
				left: arrowX,
				top: arrowY - ARROW_SIZE,
			};
		default:
			return {
				bottom: arrowY - ARROW_SIZE,
				left: arrowX,
			};
	}
};

const WithTooltip = forwardRef<HTMLElement, PropsType>(
	(
		{ children, placement: forcedPlacement, tooltip, ...parentProps },
		parentRef,
	) => {
		const [isOpen, setIsOpen] = useState(false);
		const arrowRef = useRef(null);

		const {
			context,
			placement: calculatedPlacement,
			refs,
			strategy,
			x,
			y,
			middlewareData: md,
		} = useFloating({
			middleware: [
				offset(8),
				autoPlacement({
					allowedPlacements: forcedPlacement
						? [forcedPlacement]
						: ['top', 'bottom'],
				}),
				shift({ padding: 8 }),
				arrow({ element: arrowRef, padding: 8 }),
			],
			onOpenChange: setIsOpen,
			open: isOpen,
			whileElementsMounted: autoUpdate,
		});

		const placement = forcedPlacement ? forcedPlacement : calculatedPlacement;

		// Preserve the consumer's ref
		const ref = useMemo(
			() => mergeRefs([refs.setReference, parentRef]),
			[refs.setReference, parentRef],
		);

		const { getReferenceProps, getFloatingProps } = useInteractions([
			useHover(context, { move: false }),
			useRole(context, { role: 'tooltip' }),
			useDismiss(context, { referencePress: true }),
		]);

		const arrowStyle = getArrowStyle(md.arrow, placement);
		const translateY =
			// biome-ignore lint/nursery/noNestedTernary: This is fine
			placement === 'bottom' ? 10 : placement === 'top' ? -10 : 0;
		const translateX =
			// biome-ignore lint/nursery/noNestedTernary: This is fine
			placement === 'right' ? 10 : placement === 'left' ? -10 : 0;

		return (
			<>
				{cloneElement(
					children,
					getReferenceProps({
						ref,
						...children.props,
						...parentProps,
						onKeyDown: (event) => {
							// Dismiss if pressing Spacebar or Enter
							if (event.keyCode === 32 || event.keyCode === 13) {
								setIsOpen(false);
							}
						},
					}),
				)}
				<AnimatePresence>
					{isOpen && tooltip != null ? (
						<FloatingPortal>
							<motion.div
								animate={{ opacity: 1, translateX: 0, translateY: 0 }}
								exit={{ opacity: 0 }}
								initial={{ opacity: 0, translateX, translateY }}
								transition={{
									damping: 20,
									stiffness: 300,
									type: 'spring',
								}}
								{...getFloatingProps({
									className: clsx(styles.main, styles[placement]),
									ref: refs.setFloating,
									style: {
										left: x ? x : 0,
										position: strategy,
										top: y ? y : 0,
									},
								})}
							>
								{tooltip}
								<div
									className={styles.arrow}
									ref={arrowRef}
									style={arrowStyle}
								/>
							</motion.div>
						</FloatingPortal>
					) : null}
				</AnimatePresence>
			</>
		);
	},
);

WithTooltip.displayName = 'WithTooltip';

export default WithTooltip;
