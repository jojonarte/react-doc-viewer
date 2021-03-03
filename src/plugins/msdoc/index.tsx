import React from 'react';
import styled from 'styled-components';
import { DocRenderer } from '../../types';

const MSDocRenderer: DocRenderer = ({ mainState: { currentDocument } }) => {
	if (!currentDocument) return null;

	return (
		<Container id="msdoc-renderer">
			<MSDocIframe
				src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
					currentDocument.uri
				)}`}
			/>
		</Container>
	);
};

interface MSDocIframeProps {
	src: string;
}
const MSDocIframe: React.FC<MSDocIframeProps> = React.memo(
	({ src }: MSDocIframeProps) => {
		return (
			<IFrame
				id="msdoc-iframe"
				title="msdoc-iframe"
				src={src}
				frameBorder="0"
			/>
		);
	}
);

export default MSDocRenderer;

const MSDocFTMaps = {
	doc: ['doc', 'application/msword'],
	docx: [
		'docx',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	],
	xls: ['xls', 'application/vnd.ms-excel'],
	xlsx: [
		'xlsx',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	],
	ppt: ['ppt', 'application/vnd.ms-powerpoint'],
	pptx: [
		'pptx',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	],
};

MSDocRenderer.fileTypes = [
	...MSDocFTMaps.doc,
	...MSDocFTMaps.docx,
	...MSDocFTMaps.xls,
	...MSDocFTMaps.xlsx,
	...MSDocFTMaps.ppt,
	...MSDocFTMaps.pptx,
];
MSDocRenderer.weight = 0;
MSDocRenderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();

const Container = styled.div`
	width: 100%;
`;
const IFrame = styled.iframe`
	width: 100%;
	height: 100%;
	border: 0;
`;
