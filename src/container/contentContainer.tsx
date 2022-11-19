import React from 'react';
import { CSSTransition } from 'react-transition-group';

const ContentContainer = ({ children, className }: any) => (
	<CSSTransition
		timeout={{ enter: 500, exit: 500 }}
		classNames='fade'>
		<div className={`main-content ${className} `}>
			{children}
		</div>
	</CSSTransition>
);

export default ContentContainer;