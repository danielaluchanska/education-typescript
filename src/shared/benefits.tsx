import { BenefitType } from "./types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";

export const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "Interactive Learning Environment",
      description:
        "Engage in interactive learning experiences through multimedia resources, discussion forums, and collaborative projects, fostering a dynamic and immersive educational journey that encourages active participation and critical thinking.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "Community Support",
      description:
        "Join a supportive community of fellow learners, where you can connect, collaborate, and exchange ideas with like-minded individuals, creating a valuable network of peers and mentors to support you throughout your educational endeavors.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert Instruction",
      description:
        "Benefit from expert instruction delivered by experienced educators who are passionate about sharing their knowledge and expertise in their respective fields, guaranteeing a high-quality learning experience.",
    },
  ];