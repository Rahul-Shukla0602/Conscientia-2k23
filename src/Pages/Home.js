import React from 'react'
import image1 from '../images/original_new.png'
import image2 from '../images/p1_new.png'
import image3 from '../images/p2_i.png'
import image4 from '../images/p2_ii.png'
import image5 from '../images/star_new.png'
import { useRef, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import Sponsors from '../components/sponsors'
import Navbar from '../components/Navbar'

// import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

// import '../components/sponsors.css'

// SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

function Home() {

  
  const ref = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {

    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#m1"),
      {
        y: 100
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".mainbody"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
      );
      gsap.fromTo(
        element.querySelector("#mleft"),
        {
          x: -100
        },
        {
          x: 0,
          scrollTrigger: {
            trigger: element.querySelector(".mainbody"),
            start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
      );
      gsap.fromTo(
        element.querySelector("#mright"),
      {
        x: 100
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".mainbody"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
    gsap.fromTo(
      element.querySelector("#m5"),
      {
        y: 300
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".mainbody"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
      );
      
    }, [])

    
    
  return (
    <div className="mainbody overflow-x-hidden bg-white" ref={ref}>
      
      <section className='relative flex justify-center items-center h-screen text-center'>
        <img className='absolute bottom-0 left-0 w-full pointer-events-none' src={image1} id="bgp" alt=''/>
        <img className='absolute bottom-0 left-0 w-full pointer-events-none z-20' src={image2} id="m1" alt=''/>
        <img className='absolute bottom-0 left-0 w-full pointer-events-none z-20' src={image3} id="mleft" alt=''/>
        <img className='absolute bottom-0 left-0 w-full pointer-events-none z-20' src={image4} id="mright" alt=''/>
        <img className='absolute bottom-0 left-0 w-full pointer-events-none z-10' src={image5} id="m5" alt=''/>
      </section>
      <section className="z-40 relative bg-slate-900 text-base text-white font-light p-16">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iure soluta dolor, iusto tempora atque officia necessitatibus quia harum numquam, debitis ab laudantium fugiat. Delectus quam perferendis incidunt inventore ea commodi possimus ducimus aut! At esse, eius et unde quidem natus, totam ipsum asperiores corporis libero porro cupiditate molestias doloremque sapiente temporibus excepturi nostrum eveniet! Delectus, esse quod! Quidem, rerum id iusto, quo molestiae provident maiores maxime libero eveniet debitis ducimus blanditiis. Esse in, ipsum officiis sit unde nemo tempora, cum natus soluta accusantium sint animi libero at voluptatum autem perferendis nam vel iusto ipsam sequi ex. Quibusdam maxime eligendi modi consequuntur fugit cupiditate quia eius autem totam. Necessitatibus accusamus nostrum unde, repellat eligendi repudiandae exercitationem tempore asperiores illum voluptate ducimus praesentium eaque aut porro repellendus optio quo iusto in quas, provident commodi voluptatibus ut modi. Odio cumque, harum culpa, nesciunt ipsa quaerat, dolore architecto rerum sunt ut tenetur. Quam cumque ut quae commodi veritatis esse inventore quisquam, impedit asperiores qui ratione eligendi amet, voluptate ullam reiciendis, libero laborum quis deserunt doloremque quas? Eveniet rerum labore quo fugiat, dolores corporis fuga nostrum dolorum numquam quae asperiores beatae autem perspiciatis veniam totam impedit nisi consequatur officiis laborum obcaecati deserunt dolore. Quidem molestias quam ex repellendus quas accusantium tempore harum autem beatae amet provident vel officiis libero accusamus vero, atque impedit qui ut eos quis ipsum suscipit. Porro, enim corrupti! Illum veniam amet corrupti dignissimos ipsam cum aspernatur veritatis ratione assumenda voluptate incidunt tempore, magni possimus ut quis, numquam modi minus tenetur. Voluptas sunt rerum quae ullam debitis, voluptatibus officia quod reprehenderit fugit minima quasi repudiandae? Nam maiores voluptatem voluptatibus error illum incidunt quae! Ducimus, magnam! Eaque eligendi distinctio voluptatum, rerum sunt error magnam? Accusamus, fugit veritatis, vero voluptate alias recusandae deserunt a maxime quibusdam porro laboriosam eos ab ipsa quisquam rem repellat. Illum non, repellat saepe tenetur mollitia esse sequi praesentium! Rem assumenda iure amet aliquam suscipit accusantium consectetur error sequi, alias quibusdam quisquam perspiciatis unde corporis eum architecto reiciendis sit totam ratione molestias magni beatae, vel provident adipisci? Eaque eligendi, ratione suscipit quidem itaque dolorem sequi molestias voluptas odio culpa quia est quos sed. Eos est, illum numquam corrupti minus nam atque, veniam debitis soluta fugiat quaerat reiciendis ut rerum. Eius facilis blanditiis non aliquam velit aut accusantium sint nemo a accusamus quae eveniet, alias quidem amet asperiores eaque cum odit cupiditate maiores eligendi perferendis at. Sed nemo perferendis velit quibusdam qui voluptas blanditiis alias illum dignissimos, excepturi, ad provident consectetur assumenda repudiandae animi repellendus iure ipsa sit neque distinctio molestias expedita! Voluptatibus nobis omnis aliquid doloremque sint, deleniti beatae dicta neque totam ullam voluptas aspernatur corrupti possimus ipsa nesciunt ducimus quas laboriosam odio accusantium hic reiciendis blanditiis sunt magnam. A odio laudantium atque voluptate, explicabo molestiae eius doloremque accusamus? Corporis ullam dolorum vel modi dolore aliquam esse at veritatis exercitationem illo quaerat illum aperiam, suscipit similique ipsam, et quasi ratione rem? Deserunt porro debitis provident. Corrupti blanditiis aspernatur, fugiat nam consequuntur nostrum voluptatem veritatis enim iusto et dolore vitae voluptatibus dolorem fugit illo culpa laudantium magnam? Rem dicta qui earum eius excepturi necessitatibus enim error ab, velit ipsum fugiat. Omnis ea placeat similique officiis! Quis, quod iusto? Laborum alias dolorum animi atque, laudantium odio, quisquam veniam assumenda accusamus ipsam fuga dolores doloribus in saepe, optio quidem. Eligendi iusto, vitae fuga eius, ab nostrum expedita sint totam, repellat exercitationem repudiandae molestias dicta ut officiis voluptates optio incidunt. Laboriosam doloribus architecto obcaecati! Veritatis eum iure animi tenetur facilis error ea fuga deleniti. Eligendi laboriosam, doloremque maiores ratione quasi ut commodi vel eveniet incidunt iure tempore neque aliquam voluptatum provident ad recusandae velit asperiores consequatur ducimus, dolorem nihil, veniam esse. Quia asperiores, sit nulla provident officia iste aut quasi. Cumque soluta iusto aspernatur ad dicta qui reiciendis, possimus ut placeat amet. Itaque ullam consequuntur deserunt incidunt tempora, numquam illo nam nihil commodi sint porro repudiandae ut in perspiciatis reprehenderit. Maiores vel dolorum sequi nihil maxime laborum, iusto quam esse mollitia. Maiores facere nemo nostrum quos optio ut, error consequuntur hic qui incidunt eum fuga, molestias adipisci reiciendis? Quod iusto, assumenda reprehenderit unde aspernatur fuga itaque deserunt nisi dolore eos dolores ex ipsam iste magnam provident veniam, asperiores officia porro nam explicabo excepturi quaerat quas corporis culpa! Saepe repellat id quam aperiam iusto a modi inventore voluptas, nihil accusamus nostrum aut ratione quasi iste earum amet voluptatibus at omnis, distinctio tempore? Similique eius perferendis at maxime. Laudantium expedita praesentium consectetur maxime commodi natus architecto aperiam, reprehenderit quam. Voluptate vero inventore voluptatibus ab rerum facilis quam delectus nobis saepe, illum similique aliquid! Accusamus, reprehenderit illo eligendi placeat libero officia veniam a magni nisi culpa vero maiores tenetur velit, ab sunt in. Est enim maxime a aspernatur esse quaerat officiis quas, reiciendis voluptates magnam corrupti doloribus, ipsum ea perspiciatis consectetur. Iusto aspernatur incidunt cupiditate cum?
      </section>
      <section className="z-40 relative bg-slate-900 text-base text-white font-light p-16">
        <Sponsors/>
      </section>
    </div>
  )
}

export default Home
