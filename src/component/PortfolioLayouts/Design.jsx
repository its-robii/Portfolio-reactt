import React from 'react'

const Design = () => {
  return (
    <section className="mb-7">
      <div className="container  ">
       <h2 className="text-primary font-primary text-2xl sm:text-4xl font-medium">Design Package</h2>
        <p className="text-secondery font-primary text-base sm:text-xl font-normal pt-1 pb-3">Creative</p>
       <div className="flex gap-4 sm:gap-[50px]">
       <div className="w-3/4">
        <p className="text-secondery font-primary text-xs sm:text-base font-normal leading-8 ">
          There are many variations of passages of Lorem Ipsum available, the
          majority have suffered alteration in form, by injected humour, or
          randomising words which do look slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. All the Lorem
          Ipsum generators on the 
        </p>
        <p className="hidden sm:block text-secondery font-primary">Internet tend to repeat predefined chunks.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose injected humour
          and the like. The majority have suffered alteration in form, by
          injected humour.Many desktop publishing packages and web page editors
          now use Lorem Ipsum as their default model text.</p>
        </div>
        <div className="w-1/4">
          <h3 className="text-primary font-primary font-medium sm:font-semibold text-base sm:text-lg">Services</h3>
          <p className="pb-4 mb-4 border-b-2 text-secondery max-sm:text-xs">Branding & Packaging</p>
          <h3 className="text-primary font-primary font-medium sm:font-semibold text-base sm:text-lg">Tools</h3>
          <p className="pb-4 mb-4 border-b-2 text-secondery max-sm:text-xs">Photoshop, Illustrator </p>
          <h3 className="text-primary font-primary font-medium sm:font-semibold text-base sm:text-lg">Tools</h3>
          <p className=" text-secondery max-sm:text-xs">Different, Platforms </p>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Design