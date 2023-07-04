export class LoginDto {
    email:string ='';
    password:string=''
}
export class ForgetPasswordDto {
    email:string=''
}
export class RegisterDto {
    email:string ='';
    password:string='';
    confirm_password:string='';

}
export class OtpDto { 
    otp:string =''
}
export class SignupDto{
    email:string ="";
    password:string ="";
    notification_token:string ="";
    phone_number:string ="";
    first_name:string ="";
    last_name:string ="";   
    country_code:string ="+971";   
}


export interface UserData {
  id: string;
  image: string;
  facebook_id?: any;
  twitter_id?: any;
  google_id: string;
  apple_id?: any;
  public_id: string;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string;
  country_code?: any;
  phone_number?: any;
  provider: string;
  role: string;
  link?: any;
  notification_created_at: string;
  last_active_at: string;
  token?: any;
  stripe_id: string;
  iban?: any;
  iban_available: number;
  user_status: string;
  created_at: string;
  updated_at: string;
  about_me?: any;
  id_verified: string;
  cover_image?: any;
  iban_fullname?: any;
  iban_address?: any;
}