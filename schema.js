let joi=require("joi")
let userSchema = joi.object({
  FullName: 
  joi.string()
  .alphanum(),
  userName: joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  Password: joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: joi.string().required()
})


module.exports=userSchema;