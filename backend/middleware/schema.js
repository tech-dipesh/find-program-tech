let joi=require("joi")
let userSchema = joi.object({
  yourName: joi.string()
  .alphanum().required(),
  userName: joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  Password: joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: joi.string().required()
})

let newSchema=joi.object({
  Name: joi.string().required(),
  Logo: joi.string().default("https://i.sstatic.net/pwbPp7fg.jpg"),
  releaseYear: joi.number() .min(1920) .max(2025),
  techStack: joi.string(),
  Description: joi.string().min(20)
})

module.exports={userSchema, newSchema};