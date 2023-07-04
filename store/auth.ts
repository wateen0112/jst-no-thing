import { error, log } from 'console';
import { ForgetPasswordDto, OtpDto, RegisterDto, SignupDto, UserData } from './../api/auth/index';
import { defineStore } from "pinia";
import { LoginDto } from "~/api/auth";
import { AUTH_API } from '~/api/auth/endpoints';
import axios, { AxiosResponse } from 'axios';
const  { GET , POST , DELETE} = useApi()
export const useAuthStore = defineStore('auth',()=>{
    const loginDto = ref<LoginDto>( new LoginDto());
    const forgetPasswordDto = ref<ForgetPasswordDto>( new ForgetPasswordDto());
    const registerDto = ref<RegisterDto>( new RegisterDto());
    const otpDto = ref<OtpDto> (new OtpDto);
    const signupDto = ref<SignupDto>(new SignupDto())
  const userData = ref<UserData>();


    //functions  . .. 
    async function login (){
        try {
            const res = await POST(AUTH_API.LOGIN,{...loginDto.value},{error:true})
    
            console.log(res.headers);
            console.log(res.headers['date']);
            console.log(res.headers['etag']);
            console.log(res.headers['connection']);
            console.log(res.headers['content-type']);
            console.log(res.headers['authorization']);
      



            // localStorage.setItem(`user-data`,JSON.stringify(res.data.data) )
          
        } catch (error) {
        throw(error)  
        }
    }
    async function checkEmail (){
       
        
        try {
            const res = await POST(AUTH_API.CHECK_EMAIL,{...registerDto.value},{success:true, error:true});
            console.log(res)
    signupDto.value.email= registerDto.value.email;
    signupDto.value.password= registerDto.value.password;

        } catch (error) {
            throw(error)  
        }
    }
    async function forgetPassword (){
       
        
        try {
            const res = await POST(AUTH_API.FORGET_PASSWORD,{...forgetPasswordDto.value},{success:'Link Sent to your Email', error:true});
            console.log(res)
        } catch (error) {
            throw(error)  
        }
    }
    async function signup(){
        try {
            const res = await POST(AUTH_API.SIGNUP , {...signupDto.value});
        } catch (error) {
            throw(error)
        }
    }

    return {
        userData,
        loginDto,
        signupDto,
        forgetPasswordDto,
        registerDto,
        otpDto,
        login,
        signup,
        checkEmail,
        forgetPassword
    }
})