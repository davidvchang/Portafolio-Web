import React from 'react'

function ProjectCard({linkInPortada, image, nameProject, title, description, children, btnGit, btnPage}) {
  return (
    <div className='ProjectCard'>
        <a href={linkInPortada} target='_blank' className='PhotoPortada'>
            <img src={image} alt={`Portada de ${nameProject}`} />
        </a>

        <div className='InfoProject'>
            <div className='titleDescription'>
                <span className='titleNameProject'>{title}</span>
                <p>{description}</p>

                <div className='usedTechnology'>
                    {children}
                </div>
            </div>

            <div className='GitHubVisit'>
                {btnGit}
                {btnPage}
            </div>
        </div>
    </div>
  )
}


export default ProjectCard
