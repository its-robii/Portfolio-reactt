import React from 'react'

const Reply = () => {
  return (
    <section>
      <div className="container grid grid-cols-12">
        <div className="col-span-9 w-fit">
          <h2 className="pt-[72px] pb-[18px] border-y-2 mb-6 text-primary text-4xl font-primary font-semibold">
            Leave a Reply
          </h2>
          <p className="text-secondery text-lg font-primary font-normal pb-6">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div >
            <input placeholder="" className="h-52 w-full border-2 mb-8"/>
          </div>
          <div className="flex gap-8 mb-9">
          <input placeholder="Name*" type="text" className="py-3 pl-4 pr-36 border-2 placeholder:"/>
          <input placeholder="Email*" type="text" className="py-3 pl-4 pr-36 border-2 placeholder:"/>
          <input placeholder="Website" type="text" className="py-3 pl-4 pr-36 border-2 placeholder:"/>
          </div>
          <button className="py-3 px-7 bg-black text-white mb-[60px]">Post Comment</button>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}

export default Reply