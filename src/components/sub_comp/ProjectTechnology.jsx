function ProjectTechnology({ src, alt }) {
	return (
		<div className="project-icon" style={{ height: "50px" }}>
			<img
				style={{
					filter: `
            drop-shadow(0 0 1px white)
        `,
				}}
				className=" h-100 img-fluid tech"
				src={src}
				alt={alt}
				loading="lazy"
			/>
		</div>
	);
}

export default ProjectTechnology;
