const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

// module.exports = {
//   const Page = db.define('page', {
//     title: Sequelize.STRING,
//     slug: Sequelize.STRING,
//     content: Sequelize.TEXT,
//     status: Sequelize.BOOLEAN 
//   });

//   const User = db.define('user', {
//     name: Sequelize.STRING, 
//     email: {
//       type: Sequelize.STRING,
//       validate:{
//         isEmail: true
//       }
//     }
//   })
// }


// validate: {
//   allowNull: false
// }

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'closed'
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true } 
  }
});

module.exports = {Page, User, db};

//only one module.exports 