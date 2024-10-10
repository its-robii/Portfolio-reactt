import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaDribbble } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../pages/Loading";

const BlogBanner = () => {
  const [blogData, setBlogData,] = useState({})

  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(()=>{
    axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`).then((res)=>{
     setBlogData(res.data);
     setLoading(false)
    })
   },[])

   if(loading) {
    return <Loading />
   }

   console.log(blogData);
   
  return (
    <section className="pt-24 pb-6">
      <div className="container grid gap-14 sm:grid-cols-12">
        <div className="sm:col-span-9">
          <div>
            <img src={blogData.images} alt="photo" className="w-full mb-7" />
          </div>
          <div className="mb-6">
            <h2 className="text-[42px] text-primary font-primary font-medium pb-3">
              {blogData.title}
            </h2>
            <p className="text-base font-medium font-primary text-primary pb-5">
              {new Date(blogData.creationAt).toDateString()}
            </p>
            <p className="text-secondery font-primary font-normal text-base pb-7">
             {blogData.description}
            </p>
            <p className="text-secondery font-primary font-normal text-base">
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
              nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, <span className="">sem quam semper libero, sit amet adipiscing
              sem neque sed ipsum.Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
              tempus, tellus eget condimentum rhoncus, sem quam semper libero,
              sit amet adipiscing </span>
            </p>
          </div>
        </div>
        <div className="sm:col-span-3">
          <div>
            <form action="">
              <div className="relative flex justify-end ">
                <span className="text-3xl text-slate-600 absolute pt-6 pr-5 pointer-events-none">
                  <IoSearch />
                </span>
                <input
                  type="text"
                  name="search"
                  placeholder="search"
                  aria-label="search"
                  className="border py-5 rounded-md w-full mb-12 placeholder:pl-5 text-2xl"
                />
              </div>
            </form>
          </div>
          <div>
            <h1 className="text-primary font-primary font-medium text-4xl pb-6 py-3">
              Recent Posts
            </h1>
            <p className="text-secondery font-primary font-normal text-xl py-3 border-y-2">
              Balance is important in design
            </p>
            <p className="text-secondery font-primary font-normal text-xl py-3 ">
              Tips for organizing things
            </p>
            <p className="text-secondery font-primary font-normal text-xl py-3 border-y-2">
              The shades of grey
            </p>
            <p className="text-secondery font-primary font-normal text-xl py-3 border-b-2 mb-[62px]">
              Inspiration from nature
            </p>
          </div>
          <div className="mb-[62px]">
            <h2 className="text-primary font-primary font-medium text-4xl pb-4">
              Categories
            </h2>
            <p className="text-secondery font-primary font-normal text-xl py-3 border-y-2">
              Artificial
            </p>
            <p className="text-secondery font-primary font-normal text-xl py-3 ">
              Inspirational
            </p>
            <p className="text-secondery font-primary font-normal text-xl py-3 border-y-2">
              Intelligence
            </p>
            <p className="text-secondery font-primary font-normal text-xl py-3 border-b-2">
              Motivational
            </p>
          </div>
          <div>
            <h2 className="text-primary font-primary font-medium text-4xl pb-4 border-b-2">
              Tags
            </h2>
            <ul className="flex pt-[22px] gap-3 mb-7">
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
                  Digital
                </a>
              </li>
            </ul>
            <ul className="flex gap-3 mb-7">
              <li>
                <a href="#" className="border-2 py-2 px-3">
                  Exceptional
                </a>
              </li>
              <li>
                <a href="#" className="border-2 py-2 px-3">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="border-2 py-2 px-3">
                  Minimal
                </a>
              </li>
            </ul>
            <ul className="flex gap-3 ">
              <li>
                <a href="#" className="border-2 py-2 px-3">
                  Photography
                </a>
              </li>
              <li>
                <a href="#" className="border-2 py-2 px-3">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="border-2 py-2 px-3">
                  Tips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

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

      <section className="mb-[70px]">
        <div className="container grid sm:grid-cols-12">
          <div className="sm:col-span-9 bg-[#F5F5F5] flex justify-between">
            <div>
              <h3 className="text-primary font-primary font-medium text-[22px] pl-6 py-[18px]">
                Share
              </h3>
            </div>
            <div>
              <ul className="flex pr-6 py-[18px] gap-[18px] text-xl">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaDribbble />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid sm:grid-cols-12">
          <div className="sm:col-span-9">
            <h2 className="text-primary font-primary font-medium text-4xl pb-[18px] border-b-2 mb-10">
              2 Comments
            </h2>
            <div className="flex">
              <div className="w-52 h-20 rounded-s-full pr-5">
                <img src="/cmnt_1.png" alt="comment photo" className="w-full" />
              </div>
              <div>
                <h3 className="text-primary font-primary font-medium text-2xl pb-1">
                  caliberthemes
                </h3>
                <p className="text-primary font-primary font-normal text-base pb-4">
                  September 22, 2019 at 9:43 am
                </p>
                <p className="text-secondery font-primary font-normal text-xl pb-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  Theme natoque penatibus et magnis dis parturient montes
                </p>
                <button className="float-right text-primary font-primary font-normal text-lg  px-4 border-slate-500 border mb-10">
                  Reply
                </button>
              </div>
            </div>
            <div className="flex py-10 ml-[90px] border-t-2">
              <div className="w-32 h-20 rounded-s-full pr-5 ">
                <img src="/cmnt_1.png" alt="comment photo" className="w-full" />
              </div>
              <div>
                <h3 className="text-primary font-primary font-medium text-2xl pb-1">
                  caliberthemes
                </h3>
                <p className="text-primary font-primary font-normal text-base pb-4">
                  September 22, 2019 at 9:44 am
                </p>
                <p className="text-secondery font-primary font-normal text-xl pb-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <button className="float-right text-primary font-primary font-normal text-lg  px-4 border-slate-500 border">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid sm:grid-cols-12">
          <div className="sm:col-span-9 w-fit">
            <h2 className="pt-[72px] pb-[18px] border-y-2 mb-6 text-primary text-4xl font-primary font-semibold">
              Leave a Reply
            </h2>
            <p className="text-secondery text-lg font-primary font-normal pb-6 w-fit">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div>
              <input placeholder="" className="h-52 w-fit border-2 mb-8" />
            </div>
            <div className=" flex flex-col sm:flex-row gap-8 mb-9 w-fit">
              <input
                placeholder="Name*"
                type="text"
                className="py-3 pl-4   sm:pr-36 border-2 placeholder:"
              />
              <input
                placeholder="Email*"
                type="text"
                className="py-3 pl-4  sm:pr-36 border-2 placeholder:"
              />
              <input
                placeholder="Website"
                type="text"
                className="py-3 pl-4  sm:pr-36 border-2 placeholder:"
              />
            </div>
            <button className="py-3 px-7 bg-black text-white mb-[60px]">
              Post Comment
            </button>
          </div>
          <div></div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container grid grid-cols-12">
          <div className="col-span-9 flex justify-between ">
            <ul className="flex gap-2 items-center">
              <li>
                <a href="#">
                  <FaArrowLeftLong />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Prev
                </a>
              </li>
            </ul>
            <div>
              <ul className="flex gap-2 items-center ">
                <li>
                  <a href="#">Next</a>
                </li>
                <li>
                  <a href="#" className="font-primary  text-base">
                    <FaArrowRightLong />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogBanner;
