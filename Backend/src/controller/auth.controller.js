import { cookieOptions } from "../config/cookieOption.js";
import { registerUser,loginUser } from "../services/userAuth.service.js";

export const register_user  = async (req, res) => {
    let {name,email,password} = req.body;
    const user = await registerUser(name,email,password);
    res.cookie("token", user.token,cookieOptions);
    res.status(200).json(user);
}

export const login_user = async (req, res) => {
  let { email, password } = req.body;

  const user = await loginUser(email, password); 

  req.user = user;
  res.cookie("token", user.token, cookieOptions);


  const userObj = { ...user };
  delete userObj.password;

  console.log("User object after deletion:", userObj);
  res.status(200).json(userObj);
};

export const get_current_user =(req,res)=>{
    res.status(200).json({user:req.user || null});
}

export const logoutUser = (req, res) => {
  res.clearCookie("token", {cookieOptions});
  res.status(200).json({ message: "Logged out successfully" });
};
