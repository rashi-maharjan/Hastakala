import React from 'react'
import Header from '../components/Header'

function Community() {
  return (
    <>
    <Header/>
    <section className="px-5 sm:px-10 md:px-20 lg:px-40 xl:px-56 py-8">
      <div className="container">
      <div className="flex justify-end">
            <a
              href="#"
              className="gap-2 px-5 py-2 bg-primary rounded-[22px] text-white whitespace-nowrap"
            >
              <i className="fa-solid fa-plus mr-2"></i>
              <span>Create Post</span>
            </a>
          </div>
      </div>
    </section>
    </>
  )
}

export default Community