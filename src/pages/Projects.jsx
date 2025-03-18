import Project from '../components/project/Project'
import ReactPaginate from 'react-paginate'
import   '../styles/main.css'

import { projects } from '../helpers/ProjectList'
import { useState } from 'react'

const itemPerPage = 6

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const sortedProjects = ([...projects])
  const offset = currentPage * itemPerPage
  const currentPageData = sortedProjects.slice(offset, offset + itemPerPage)
  const pageCount = Math.ceil(sortedProjects.length / itemPerPage)
  
  const handlePageClick = (toursData) => {
    setCurrentPage(toursData.selected)
  }
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {currentPageData?.map((project, index) => {
            return (
              <Project
                key={offset + index}
                title={project.title}
                img={project.img}
                index={offset + index}
              />
            )
          })}
        </ul>
        <ReactPaginate
          previousClassName="hidden"
          nextLabel="Next >>"
          nextClassName="next-button"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination-container"
          pageLinkClassName="page-link"
          activeLinkClassName="active-page-link"
        />
      </div>
    </main>
  )
}

export default Projects
