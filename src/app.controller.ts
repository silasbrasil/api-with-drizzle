import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return `Hello World on port ${process.env.PORT} ffrom Docker Compose`;
  }
}
