import React from 'react';

const BlockImage = ({ blockOptions }) => {
	const alt = "cool image!";
	return (
		<table
			width="100%"
			cellPadding="0"
			cellSpacing="0"
			role="presentation"
		>
			<tbody>
				<tr>
					<td>
						<img alt={alt} style={{width:'100%'}} src={blockOptions.elements[0].source} />
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BlockImage;