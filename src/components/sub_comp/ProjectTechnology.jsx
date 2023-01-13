import React from 'react'

function ProjectTechnology({src, alt}) {
  return (
    <div className='project-icon' style={{height: '50px'}}>
        <img
        className=" h-100 img-fluid"
        src={src}
        alt={alt}
        />
    </div>
  )
}

export default ProjectTechnology