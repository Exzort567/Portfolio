import { AiOutlineNodeCollapse } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import {
  SiTensorflow,
  SiApachekafka,
  SiVault,
  SiPytorch,
  SiGrafana,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiNvidia,
  SiGoogleoptimize,
  SiMongodb,
  SiMysql,
  SiPrometheus,
  SiCypress,
  SiNextdotjs,
  SiGoland,
  SiFastapi,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDjango,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";

const skills = [
  {
    category: "Deep Learning",
    items: [
      {
        name: "Python",
        icon: DiPython,
      },
      {
        name: "C++",
        icon: CgCPlusPlus,
      },
      {
        name: "PyTorch",
        icon: SiPytorch,
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
      },
      {
        name: "CUDA",
        icon: SiNvidia,
      },
      {
        name: "Optimization",
        icon: SiGoogleoptimize,
      },
    ],
  },
  {
    category: "System",
    items: [
      {
        name: "Git",
        icon: DiGit,
      },
      {
        name: "Kafka",
        icon: SiApachekafka,
      },
      {
        name: "Vault",
        icon: SiVault,
      },
      {
        name: "Grafana",
        icon: SiGrafana,
      },
      {
        name: "Prometheus",
        icon: SiPrometheus,
      },
      { name: "Docker", icon: SiDocker },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
      {
        name: "CI/CD",
        icon: AiOutlineNodeCollapse,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Nginx",
        icon: SiNginx,
      },
      {
        name: "AWS",
        icon: FaAws,
      },
    ],
  },
  {
    category: "App Development",
    items: [
      {
        name: "JavaScript",
        icon: DiJavascript1,
      },
      {
        name: "Golang",
        icon: SiGoland,
      },
      {
        name: "Java",
        icon: DiJava,
      },
      {
        name: "React",
        icon: DiReact,
      },
      {
        name: "Node.js",
        icon: DiNodejs,
      },
      {
        name: "Django",
        icon: DiDjango,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "MicroApp",
        icon: BsBox,
      },
      {
        name: "Cypress",
        icon: SiCypress,
      },
    ],
  },
];

export default skills;
