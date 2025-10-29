const { prisma } = require("../db/config");

async function findUsersWithPopularPosts() {
  const posts = await prisma.user.finddMany({
    where:{
      posts:{
        some:{
          likes:{
            gt:100
          }
        }
      }
    }
  })
  
  return posts
}

module.exports = { findUsersWithPopularPosts };
