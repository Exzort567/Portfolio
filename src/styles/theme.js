// theme.js

const mixins = {
    boxShadow: `
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    `,
  };
  
  const theme = {
    bp: {
      mobileS: `max-width: 330px`,
      mobileM: `max-width: 400px`,
      mobileL: `max-width: 480px`,
      tabletS: `max-width: 600px`,
      tabletL: `max-width: 768px`,
      desktopXS: `max-width: 900px`,
      desktopS: `max-width: 1080px`,
      desktopM: `max-width: 1200px`,
      desktopL: `max-width: 1400px`,
    },
    mixins: mixins,
  };
  
  export default theme;
  