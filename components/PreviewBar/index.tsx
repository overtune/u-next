import React from 'react';

const PreviewBar: React.FC = () => {
	return (
		<div className="p-4 text-white bg-gray-900">
			<div className="container mx-auto">
				<p className="mb-4 text-right md:mb-0">
					<a href="/api/exit-preview">Exit preview mode -&gt;</a>
				</p>
			</div>
		</div>
	);
};

export default PreviewBar;
