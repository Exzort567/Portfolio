import chatify from "../Assets/Projects/chatify.png";
import beanLeaf from "../Assets/Projects/bean_leaf.png"

const portfoliolist = [
    {
      id: 1,
      imgPath: {beanLeaf},
      isBlog: false,
      title: "Bean Leaf Disease Classification",
      description: "Using Tensorflow and Google Colab to design, build, train, and evaluate a CNN model capable of identifying bean leaf diseases into three classes: healthy, bean rust, and angular leaf spot.",
      ghLink: "https://github.com/Exzort567/cnn_bean_leaf_disease",
      demoLink: "https://cnnbeanleafdisease.streamlit.app/",
      category: "machine learning"
    },
    {
        id: 2,
        imgPath: {chatify},
        isBlog: false,
        title: "Trade Pinas",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "https://github.com/soumyajit4419/Chatify",
        demoLink: "https://chatify-49.web.app/",
        category: "machine learning"
    },
    {
        id: 3,
        imgPath: {chatify},
        isBlog: false,
        title: "TeamDir",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "https://github.com/soumyajit4419/Chatify",
        demoLink: "https://chatify-49.web.app/",
        category: "applications"
    }
  ];
  const categorylist = [
    { id: 1, category: "machine learning", value: "all" },
    { id: 2, category: "machine learning", value: "all" },
    { id: 3, category: "applications", value: "all" },
    
  ];