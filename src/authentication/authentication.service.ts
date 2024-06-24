import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  login() {
    return {
      success: true,
      message: 'User Login Successfully',
      data: {
        name: 'Rugved Patel',
        role: 'Admin',
        themeID: 'neon',
        logo: 'https://emerald.nyc.digitalocean.com/1234',
        plan: 'active',
      },
    };
  }
  signUp() {
    return {
      success: true,
      message: 'User Register Successfully',
      data: {
        name: 'Rugved Patel',
        role: 'Admin',
        themeID: 'neon',
        logo: 'https://emerald.nyc.digitalocean.com/1234',
        plan: 'active',
      },
    };
  }
  resendOTP() {
    return {
      success: true,
      message: 'OTP sent Successfully',
    };
  }
  verifyOTP() {
    return {
      success: true,
      message: 'OTP verified Successfully',
    };
  }
  forgetPassword() {
    return {
      success: true,
      message: 'Link sent on email Successfully',
    };
  }
  resetPassword() {
    return {
      success: true,
      message: 'Password reset Successfully',
    };
  }
}
