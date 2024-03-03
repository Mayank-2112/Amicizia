import User from "../models/user.model.js";
import { errorhandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signup = async (req,res,next)=>{
    const {email,username,password} = req.body;
    if(!username || !email || !password || username === '' || email === '' || password === '')
    {
        next(errorhandler(400,'All fields are required!!'));
    }
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashPassword});
    try {
        await newUser.save();
        res.json('User added'); 
    } catch (error) {
        next(error);        
    }
}


export const signin = async (req,res,next)=>{
    const {username,password} = req.body;
    if(!username || !password || username === '' || password === ''){
        next(errorhandler(400,'All fields are required'));
    }
    
    try {
        const validUser = await User.findOne({username});
        if(!validUser){
            return next(errorhandler(404,'User Not Found!!'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorhandler(404,'Invalid Password!!'));
        }
        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest);
    } catch (error) {
        next(error);
    }
}

export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password, ...rest } = user._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            name.toLowerCase().split(' ').join('') +
            Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password, ...rest } = newUser._doc;
        res
          .status(200)
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };