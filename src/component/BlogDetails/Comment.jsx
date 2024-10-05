import React from 'react'

const Comment = () => {
  return (
    <section>
    <div className="container grid sm:grid-cols-12">
      <div className="sm:col-span-9">
        <h2 className="text-primary font-primary font-medium text-4xl pb-[18px] border-b-2 mb-10">
          2 Comments
        </h2>
        <div className="flex">
          <div className="w-52 h-20 rounded-s-full pr-5">
            <img
              src="/cmnt_1.png"
              alt="comment photo"
              className="w-full"
            />
          </div>
          <div>
            <h3 className="text-primary font-primary font-medium text-2xl pb-1">
              caliberthemes
            </h3>
            <p className="text-primary font-primary font-normal text-base pb-4">
              September 22, 2019 at 9:43 am
            </p>
            <p className="text-secondery font-primary font-normal text-xl pb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme
              natoque penatibus et magnis dis parturient montes
            </p>
            <button className="float-right text-primary font-primary font-normal text-lg  px-4 border-slate-500 border mb-10">
              Reply
            </button>
          </div>
        </div>
        <div className="flex py-10 ml-[90px] border-t-2">
          <div className="w-32 h-20 rounded-s-full pr-5 ">
            <img
              src="/cmnt_1.png"
              alt="comment photo"
              className="w-full"
            />
          </div>
          <div>
            <h3 className="text-primary font-primary font-medium text-2xl pb-1">
              caliberthemes
            </h3>
            <p className="text-primary font-primary font-normal text-base pb-4">
              September 22, 2019 at 9:44 am
            </p>
            <p className="text-secondery font-primary font-normal text-xl pb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <button className="float-right text-primary font-primary font-normal text-lg  px-4 border-slate-500 border">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Comment