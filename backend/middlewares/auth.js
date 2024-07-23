import { getUser } from "../services/auth.js";

 export const cheakForAuthenticationCookie  = (cookieName)=>{
    return (req,res,next) => 
    {
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue) next();

        try{
            const userPayload = getUser(tokenCookieValue);
            req.user = userPayload;
        }
        catch{}

        next();
        
    }
}