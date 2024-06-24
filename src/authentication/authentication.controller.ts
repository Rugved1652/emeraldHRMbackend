import { Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('/api/')
export class AuthenticationController {
  constructor(private readonly AuthenticationService: AuthenticationService) {}

  @Post('login')
  login() {
    return this.AuthenticationService.login();
  }
  @Post('signup')
  signUp() {
    return this.AuthenticationService.signUp();
  }
  @Post('resend-otp')
  resendOTP() {
    return this.AuthenticationService.resendOTP();
  }
  @Post('verify-otp')
  verifyOTP() {
    return this.AuthenticationService.verifyOTP();
  }
  @Post('forget-password')
  forgetPassword() {
    return this.AuthenticationService.forgetPassword();
  }
  @Post('reset-password')
  resetPassword() {
    return this.AuthenticationService.resetPassword();
  }
}
