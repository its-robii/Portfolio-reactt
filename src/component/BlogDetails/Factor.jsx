import React from 'react'

const Factor = () => {
  return (
    <section className="mb-12">
    <div className="container">
      <div className="w-2/5">
        <h2 className="text-[42px] text-primary font-primary font-medium pb-5">
          The most important factor
        </h2>
        <div className="w-[420px] h-[81px] ml-10  mb-5">
          <p className="text-base text-secondery font-primary font-normal leading-7 ">
            Aenean sodales sem sed erat auctor semper Cras dictum iaculis
            fringilla. Proin malesuada Etiam sodales quam ac maximus
            sodales.sodales quam ac maximus sodales
          </p>
        </div>
        <p className="text-base text-secondery font-primary font-normal mb-11">
          The most important factor
        </p>
        <ul className="flex gap-3">
          <li>
            <a href="#" className="border-2 py-2 px-3">
              Agency
            </a>
          </li>
          <li>
            <a href="#" className="border-2 py-2 px-3">
              Creative
            </a>
          </li>
          <li>
            <a href="#" className="border-2 py-2 px-3">
            Minimal
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Factor