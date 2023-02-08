import Dropdown from './Dropdown';
import CardList from './CardList';
import { useState } from 'react';
import search from '../helpers/search';
import getAutoTerms from '../helpers/getAutoTerms';

const ProjectsList = ({ projects }) => {
	const [searchValue, setSearchValue] = useState('');

	const filteredProjects = search(projects, searchValue);

	let uniqueTerms = getAutoTerms(projects);

	return (
		<div className="card p-4 mb-4">
			<div>
				<Dropdown
					className="mx-auto"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
					termData={uniqueTerms}
				/>
				<CardList className="p-4" data={filteredProjects} data_type="project" />
			</div>
		</div>
	);
};

export default ProjectsList;
