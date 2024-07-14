import { Controller, Get } from '@nestjs/common';
import { DrizzleService } from './database/drizzle.service';

@Controller()
export class AppController {
  constructor(private readonly drizzleService: DrizzleService) {}

  @Get()
  getHello(): Record<any, any> {
    return {
      status: 'OK',
      dbConnection: this.drizzleService.db,
    };
  }
}
