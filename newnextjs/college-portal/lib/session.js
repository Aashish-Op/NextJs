import "server-only";
import {SignJWT,jwtVerify} from "jose";
import { cookies } from "next/headers";

const secret = process.env.SESSION_SECRET;

if(!secret){
    throw new Error("SESSION_SECRET is missing in .env.local file");
}

const secretKey = new TextEncoder().encode(secret);
const COOKIE_NAME = "college-portal-session";

export async function createSession(user){
    const expiresAt=new Date(Date.now() + 60 * 60 * 1000); //1 hour
    const token=await new SignJWT({role:user.role,name:user.name,})
        .setProtectedHeader({alg:"HS256"})
        .setSubject(user.id)
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secretKey);
        const cookieStore=await cookies();
        cookieStore.set(
            COOKIE_NAME,token,{
                httpOnly:true,
                secure:process.env.NODE_ENV==="production",
                sameSite:"lax",
                path:"/",
                expires:expiresAt,

            }
        );
}

export async function getSession(){
    const cookieStore=await cookies();
    const token=cookieStore.get(COOKIE_NAME)?.value;
    if(!token){
        return null;
    }
    try{
        const {payload} = await jwtVerify(token, secretKey);
        return payload;
    }catch(error){
        console.error("Error verifying JWT:", error);
        return null;
    }
}