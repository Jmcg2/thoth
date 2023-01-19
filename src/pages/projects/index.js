import CardList from '../../components/CardList';
import Dropdown from '../../components/Dropdown';
import handleProjects from '../../helpers/getProjects';
import { useState } from 'react';
import search from '../../helpers/search';

const ProjectDetail = ({ projects }) => {
	const [searchValue, setSearchValue] = useState('');

	const filteredProjects = search(projects, searchValue);

	return (
		<>
			<div className="mt-5 w-11/12 mx-auto">
				<Dropdown
					className="mx-auto"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<CardList data={filteredProjects} data_type="project" />
		</>
	);
};

export const getStaticProps = async () => {
	const projects = await handleProjects();

	return {
		props: { projects },
		revalidate: 600
	};
};

export default ProjectDetail;
