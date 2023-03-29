import findProject from '../../helpers/findProject';
import handleProjects from '../../helpers/getProjects';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetails = ({ project }) => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="text-center w-11/12 flex py-2 md:flex-row flex-col mx-auto">
				<div className="bg-slate-400 dark:bg-slate-900 rounded-xl p-4 md:w-1/3 w-full">
					<h1 className="text-3xl">{project.project_name}</h1>
					<Image
						className="mx-auto "
						src={`/images/${project.project_img}.png`}
						alt="project logo"
						width={200}
						height={200}
					/>
				</div>
				<div className="bg-slate-400 dark:bg-slate-900 md:w-2/3 mt-2 md:mt-0 sm:w-full md:ml-2 rounded-xl p-5">
					<h3 className="text-left text-lg font-bold pb-2">{`Description:`}</h3>
					<p className="text-left">{project.short_desc}</p>
				</div>
			</div>
			<div className="w-11/12 mx-auto rounded-xl bg-slate-400 dark:bg-slate-900 p-10 flex flex-row flex-wrap">
				{project.tags.map((tag, index) => (
					<p
						className="text-center text-white text-lg bg-slate-500 rounded-xl mx-1 my-2 p-2"
						key={index}>
						<Link
							href={{
								pathname: `/search/`,
								query: { tag } // the data
							}}>
							{tag}
						</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const projects = await handleProjects();
	const paths = projects.map((project) => ({
		params: {
			shop: project.name,
			project: project.project_name
		}
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const project = await findProject(params.project);
	return {
		props: { project },
		revalidate: 600
	};
};

export default ProjectDetails;
