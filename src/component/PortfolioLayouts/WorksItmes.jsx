import React from 'react'

const WorksItmes = () => {
  return (
    <section className="mb-32">
        <div className="container grid sm:grid-cols-12 gap-7">
           <div className="sm:col-span-4">
           <div>
            <img src="/works_1.png" className="w-full mb-4" />
            </div>
            <div>
            <h2  className=" text-primary font-primary font-medium text-[18px] flex justify-center">Square Brochure</h2>
            <p className="flex justify-center">Print</p>
          </div>
           </div>
            <div className="sm:col-span-4">
            <div>
            <img src="/works_2.png" className="w-full mb-4" />
            </div>
            <div>
            <h2  className=" text-primary font-primary font-medium text-[18px] flex justify-center">Square Brochure</h2>
            <p className="flex justify-center">Mockup</p>
          </div>
            </div>
          <div className="sm:col-span-4">
          <div >
            <img src="/works_3.png" className="w-full mb-4" />
            </div>
            <div>
            <h2  className=" text-primary font-primary font-medium text-[18px] flex justify-center">Square Brochure</h2>
            <p className="flex justify-center">Video</p>
          </div>
          </div>
        </div>
    </section>
    
  )
}

export default WorksItmes
