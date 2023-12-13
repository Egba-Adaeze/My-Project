"use client";
import Image from "next/image";
import { CallToAction, Footer, HeaderMenu, NavBar } from "./components";
import ICONS from "./asset/icons";
import IMAGES from "./asset/images";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "./store/features/book";
import { RootState } from "./store";
type ITProp = {
  value: string | boolean;
};

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.book);
  // const [data, setData] = useState<any[]>([]);
  // const [first, setFirst] = useState<ITProp[]>();
  // setFirst([{ value: true }]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // data.map((i) => console.log(i.title))
    setIsLoading(true);
    axios
      .get("https://freetestapi.com/api/v1/books", {
        params: {
          page,
          search,
          limit: 16,
        },
      })
      .then((res) => {
        dispatch(updateBook(res.data));
        console.log(res.data)
      })
      .finally(() => setIsLoading(false));
  }, [search, page]);


  return (
    <main className="container mx-auto px-5">
      <NavBar />
      <HeaderMenu />
      <CallToAction />
      <section className="text-center text-4xl font-black mt-7">
        Search among{" "}
        <span className="bg-gradient-to-r from-[#B176F2] to-[#FAC1F1] inline-block text-transparent bg-clip-text px-2">
          58340
        </span>
        courses and <br /> find your favorite course
      </section>

      {/* New courses */}
      <section className="mt-12">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">New Courses(Books)</h3>
          <ul className="flex items-center gap-3">
            <li>All courses</li>
            <li>All courses</li>
            <li>All courses</li>
            <li>All courses</li>
            <li>
              <button
                disabled={page == 1 || isLoading}
                onClick={() => setPage((pre) => pre - 1)}
              >
                <Image
                  className="rounded-md rotate-180"
                  alt="search"
                  width={16}
                  src={ICONS.caret}
                />
              </button>
            </li>
            <li>
              <button
                disabled={isLoading}
                onClick={() => setPage((pre) => pre + 1)}
              >
                <Image
                  className="rounded-md"
                  alt="search"
                  width={16}
                  src={ICONS.caret}
                />
              </button>
            </li>
            <li>
              <button>
                <Image
                  className="rounded-md"
                  alt="search"
                  width={16}
                  src={ICONS.filter}
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 mt-7 gap-3">
          {isLoading ? (
            <div className="text-center mt-5">Loading</div>
          ) : (
            data.map((i) => (
              <div key={i.id} className="p-1 bg-[#FAFAFA]">
                <Image
                  className="rounded-md"
                  alt="course-icon"
                  width={340}
                  height={240}
                  src={i.cover_image}
                />
                <p className="mt-2 font-medium">
                  {i.title}
                  {/* Learn Figma - UI/UX Design Essential Training */}
                </p>
                <div className="flex items-start gap-1 text-xs mt-3">
                  <Image
                    className="rounded-md"
                    alt="search"
                    width={16}
                    src={ICONS.student}
                  />{" "}
                  {i.author}
                </div>

                <div className="flex items-start gap-1 text-xs mt-3">
                  <Image
                    className="rounded-md"
                    alt="search"
                    width={16}
                    src={ICONS.lesson}
                  />{" "}
                  {i.description}
                </div>

                <div className="flex items-center justify-between mt-5 font-medium text-gray-600">
                  <button className="bg-[#080808] text-white flex items-center p-1 h-min rounded-md">
                    Start Course
                    <Image
                      className="rounded-md"
                      alt="caretWhite"
                      width={14}
                      src={ICONS.caretWhite}
                    />
                  </button>
                  <div>
                    <Image
                      className="rounded-md"
                      alt="score"
                      width={40}
                      src={ICONS.score}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Your courses */}
      <section className="mt-20">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">Your Courses</h3>
          <ul className="flex items-center gap-3">
            <li>See all</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 mt-7 gap-3">
          {[..."    "].map(() => (
            <div key={Math.random()} className="flex p-1 bg-[#FAFAFA]">
              <Image
                className="rounded-md"
                alt="course-icon"
                width={270}
                height={240}
                src={IMAGES.courseTwo}
              />
              <div className="px-2">
                <p className="mt-2 font-medium">
                  Google Ads Training 2021: Profit with Pay
                </p>
                <div className="flex justify-between text-xs mt-3 font-medium text-gray-600">
                  <span className="flex gap-1">
                    <Image
                      className="rounded-md"
                      alt="search"
                      width={16}
                      src={ICONS.lesson}
                    />
                    Lesson : 6
                  </span>
                  <span className="flex gap-1">
                    <Image
                      className="rounded-md"
                      alt="search"
                      width={16}
                      src={ICONS.student}
                    />{" "}
                    Student : 6
                  </span>
                  <span className="flex gap-1">
                    <Image
                      className="rounded-md"
                      alt="search"
                      width={16}
                      src={ICONS.trophy}
                    />
                    Beginner
                  </span>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <div className="flex">
                    <Image
                      className="rounded-md"
                      alt="instructor"
                      width={44}
                      height={44}
                      objectFit="cover"
                      src={IMAGES.instructor}
                    />
                    <div className="pl-2">
                      <p className="text-sm">Jon Kantner</p>
                      <p className="text-xs text-gray-500">SEO</p>
                    </div>
                  </div>
                  <button className="bg-[#080808] text-white flex items-center p-1 h-min rounded-md">
                    Let's Go
                    <Image
                      className="rounded-md"
                      alt="caretWhite"
                      width={14}
                      src={ICONS.caretWhite}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* email subscribe */}
      <section className="flex md:flex-row flex-col items-center justify-between mt-20">
        <h2 className="font-black text-4xl">
          Find out about the latest courses with the <br />{" "}
          <span className="text-blue-600">Academy</span> newsletter
        </h2>
        <form className="flex relative border p-1 h-min bg-gray-50">
          <input
            type="email"
            required
            placeholder="Email address..."
            className="bg-gray-50 pr-4"
          />
          <button className="uppercase bg-[#080808] text-white text-sm p-1 rounded mr-3">
            Submit
          </button>
        </form>
      </section>

      {/* Top courses */}
      <section className="mt-20">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">Top Courses</h3>
          <ul className="flex items-center gap-10">
            <li>
              <button>
                <Image
                  className="rounded-md rotate-180"
                  alt="search"
                  width={16}
                  src={ICONS.caret}
                />
              </button>
            </li>
            <li>
              <button>
                <Image
                  className="rounded-md"
                  alt="search"
                  width={16}
                  src={ICONS.caret}
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 mt-7 gap-3">
          {[..."    "].map(() => (
            <div key={Math.random()} className="p-1 bg-[#FAFAFA]">
              <Image
                className="rounded-md"
                alt="course-icon"
                width={340}
                height={240}
                src={IMAGES.courseOne}
              />
              <p className="mt-2 font-medium">
                Learn Figma - UI/UX Design Essential Training
              </p>

              <div className="flex justify-between text-xs mt-3">
                <span className="flex gap-1">
                  <Image
                    className="rounded-md"
                    alt="search"
                    width={16}
                    src={ICONS.lesson}
                  />{" "}
                  Lesson : 6
                </span>
                <span className="flex gap-1">
                  <Image
                    className="rounded-md"
                    alt="search"
                    width={16}
                    src={ICONS.student}
                  />{" "}
                  Student : 6
                </span>
                <span className="flex gap-1">
                  <Image
                    className="rounded-md"
                    alt="search"
                    width={16}
                    src={ICONS.trophy}
                  />
                  Beginner
                </span>
              </div>
              <div className="flex items-center justify-between mt-5 font-medium text-gray-600">
                <button className="bg-[#080808] text-white flex items-center p-1 h-min rounded-md">
                  Start Course
                  <Image
                    className="rounded-md"
                    alt="caretWhite"
                    width={14}
                    src={ICONS.caretWhite}
                  />
                </button>
                <div>
                  <Image
                    className="rounded-md"
                    alt="score"
                    width={40}
                    src={ICONS.score}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
