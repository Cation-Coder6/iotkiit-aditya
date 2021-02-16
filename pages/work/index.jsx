import ProjectCard from "../../components/workPage/ProjectCard";
import WorkHeader from "../../components/workPage/WorkHeader";
import Head from "next/head";
import { Blog } from "../../components/workPage/BlogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import Filler from "../../components/workPage/Filler";
import SectionHeader from "../../components/workPage/SectionHeader";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

const projects = [
  {imgUrl:"https://chaibarbbsr.com/assets/img/main_bg.jpg",type:"Portfolio • Website",name:"Chaibar 1",addr:"KIIT Road",link:"https://chaibarbbsr.com",desc:"A portfolio web for best chai place"},
  {imgUrl:"https://chaibarbbsr.com/assets/img/main_bg.jpg",type:"Portfolio • Website",name:"Chaibar 2",addr:"KIIT Road",link:"https://chaibarbbsr.com",desc:"A portfolio web for best chai place"},
  {imgUrl:"https://chaibarbbsr.com/assets/img/main_bg.jpg",type:"Portfolio • Website",name:"Chaibar 3",addr:"KIIT Road",link:"https://chaibarbbsr.com",desc:"A portfolio web for best chai place"},
  {imgUrl:"https://chaibarbbsr.com/assets/img/main_bg.jpg",type:"Portfolio • Website",name:"Chaibar 4",addr:"KIIT Road",link:"https://chaibarbbsr.com",desc:"A portfolio web for best chai place"},
  {imgUrl:"https://chaibarbbsr.com/assets/img/main_bg.jpg",type:"Portfolio • Website",name:"Chaibar 5",addr:"KIIT Road",link:"https://chaibarbbsr.com",desc:"A portfolio web for best chai place"},
  {imgUrl:"https://chaibarbbsr.com/assets/img/main_bg.jpg",type:"Portfolio • Website",name:"Chaibar 6",addr:"KIIT Road",link:"https://chaibarbbsr.com",desc:"A portfolio web for best chai place"},
]

const blogs = {
  main:{date:"20 Nov 2020",link:"https://www.medium.com",title:"What it means when a man falls from outer space",desc:"Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimahs playfully subversive style is wholly her own.",author:"Susie the cat",authorPic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"},
  top:{date:"20 Nov 2020",link:"https://www.medium.com",title:"What it means when a man falls from outer space",desc:"Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimahs playfully subversive style is wholly her own.",author:"Susie the cat",authorPic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"},
  bottom:{date:"20 Nov 2020",link:"https://www.medium.com",title:"What it means when a man falls from outer space",desc:"Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimahs playfully subversive style is wholly her own.",author:"Susie the cat",authorPic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"},
  
}

const Works = () => {
  return (
    <div>
      <Head>
        <title>Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <WorkHeader />
      <SectionHeader />
      <Filler />
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{clickable:true}}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
            spaceBetween:10
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween:30
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
            spaceBetween:10
          },
        }}
      >
        {projects.map((project)=>(
           <SwiperSlide>
           <ProjectCard project={project} />
         </SwiperSlide>
        ))}
      </Swiper>
      <Blog main={blogs.main} top={blogs.top} bottom={blogs.bottom} />
    </div>

  );
};

export default Works;
