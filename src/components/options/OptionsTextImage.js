import React from 'react';
import TinyMCE from 'react-tinymce';

const OptionsTextImage = ({ block, onPropChange }) => {
	return (
		<div>
			<div>
				<label>URL: <input type="text" value={block.options.elements[1].source} onChange={(e) => onPropChange('source', e.target.value, false, 1)} /></label>
			</div>
			<div>
				<label>
					Text:
					<TinyMCE
						content={block.options.elements[0].text}
						config={{
						  plugins: 'link image code textcolor colorpicker',
						  toolbar: 'undo redo | forecolor backcolor |bold italic | alignleft aligncenter alignright | code'
						}}
						onChange={(e) => onPropChange('text', e.target.getContent(), false, 0)}
					 />
				 </label>
			</div>
		</div>
	);
};

export default OptionsTextImage;
