import Dropdown from './Dropdown';
import CardList from './CardList';
import { useState } from 'react';
import search from '../helpers/search';

const ProjectsList = ({ projects }) => {
	const [searchValue, setSearchValue] = useState('');

	const filteredProjects = search(projects, searchValue);

	return (
		<div className="card p-4 mb-4">
			<div>
				<Dropdown
					className="mx-auto"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
				<CardList className="p-4" data={filteredProjects} data_type="Project" />
			</div>
		</div>
	);
};

export default ProjectsList;
