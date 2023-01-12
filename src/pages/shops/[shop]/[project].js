import findProject from '../../../helpers/findProject';
import handleProjects from '../../../helpers/getProjects';
import Image from 'next/image';

const ProjectDetails = ({ project }) => {
	return (
		<>
			<div className="text-center w-11/12 flex py-2 md:flex-row flex-col mx-auto">
				<div className="bg-slate-400 dark:bg-slate-900 rounded-xl p-4 md:w-1/3 w-full">
					<h1 className="text-3xl">{project.project_name}</h1>
					<Image
						className="mx-auto "
						src={`/images/${project.img}.png`}
						alt="project logo"
						width={200}
						height={200}
					/>
					{/* <h3 className="text-2xl">{project.location}</h3> */}
					{/* <div
						className="hover:cursor-pointer w-full "
						onClick={() => {
							window.open(`mailto:${project.contact}`);
						}}>
						<h3 className="flex justify-center text-xl break-all">
							{project.contact}{' '}
							<span className=" my-auto ml-1 h-full">
								<LinkIcon className=" w-5 h-5" />
							</span>
						</h3>
					</div> */}
				</div>
				<div className="bg-slate-400 dark:bg-slate-900 md:w-2/3 mt-2 md:mt-0 sm:w-full md:ml-2 rounded-xl p-5">
					<h3 className="text-left text-lg font-bold pb-2">{`Description:`}</h3>
					<p className="text-left">{project.short_desc}</p>
				</div>
			</div>
			<div className="card"></div>
		</>
	);
};

export const getStaticPaths = async () => {
	const projects = await handleProjects();

	const paths = projects.map((project) => ({
		params: { shop: project.name, project: project.project_name }
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
