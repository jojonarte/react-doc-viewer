import React from 'react';
import styled from 'styled-components';
import { DocRenderer } from '../../types';
import ImageProxyRenderer from '../image';

const StyledImageRenderer = styled(ImageProxyRenderer)`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: transparent;
	background-size: 20px 20px;
	background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;

const PNGRenderer: DocRenderer = (props) => <StyledImageRenderer {...props} />;

PNGRenderer.fileTypes = ['png', 'image/png'];
PNGRenderer.weight = 0;

export default PNGRenderer;
