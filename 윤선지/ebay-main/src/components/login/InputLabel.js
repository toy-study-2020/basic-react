import React from 'react';

function InputLabel({id, title, required}) {
	return (
		<>
		<label for={id}>
			{required && <span aria-label="필수" className="required">*</span>}
			{title}
		</label>
		</>
	);
}

export default InputLabel;