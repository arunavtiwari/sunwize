import Image from "next/image";

const SingleProject = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="rounded mb-4 w-full object-cover h-48"
      />
      <h3 className="text-xl font-semibold mb-1 text-primary">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 mb-1">{project.location}</p>
      <p className="text-sm text-gray-500 mb-3">Capacity: {project.capacity}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
      <a
        href={project.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 text-sm"
      >
        View PDF
      </a>
    </div>
  );
};

export default SingleProject;
