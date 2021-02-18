import ProjectCard from "../../components/workPage/ProjectCard";
import WorkHeader from "../../components/workPage/WorkHeader";
import Head from "next/head";
import { Blog } from "../../components/workPage/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Filler from "../../components/workPage/Filler";
import SectionHeader from "../../components/workPage/SectionHeader";
import Meed from "meed";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Works = (props) => {
  const { blogs } = props;
  return (
    <div>
      <Head>
        <html lang="en" />
        <title>Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WorkHeader numProjects={props.numProjects} numBlogs={props.numBlogs} />
      <SectionHeader />
      <Filler />
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {props.projects.map((project) => (
          <SwiperSlide key={`slide-id-${project.id}`}>
            <ProjectCard key={`project-id-${project.id}`} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Blog main={blogs.main} top={blogs.top} bottom={blogs.bottom} />
    </div>
  );
};

export async function getStaticProps(context) {
  const SERVER = "https://api.iotkiit.in";

  //Getting Projects from Server
  const projectsRes = await fetch(`${SERVER}/projects`);
  const projectsData = await projectsRes.json();
  projectsData.forEach(
    (v, i, arr) => (arr[i].imgUrl = SERVER + v.imgUrl.formats.small.url)
  );

  //Getting Feed from Meed
  const feed = new Meed({ fetch });

  const articles = await feed.user("iot-lab");

  articles.forEach((v, i, arr) => {
    //Converting date format
    arr[i].date = v.date.toLocaleDateString("IN");

    //Extracting thumbnail from HTML
    arr[i].authorPic = v.content.match('<img alt="" src="(.+?)" />')[1];

    //Extract the first <p> tag
    arr[i].desc = v.content.match("<p>([^<].+?)</p>")[1].substr(0, 150) + "...";
  });

  //Taking the first 3 articles
  const [main, top, bottom] = articles;

  return {
    props: {
      projects: projectsData,
      blogs: {
        main,
        top,
        bottom,
      },
      numProjects: projectsData?.length,
      numBlogs: articles?.length,
    },
    revalidate: 10,
  };
}

export default Works;
