import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':endpoint')
  async getData(@Param('endpoint') endpoint: string) {
    return this.appService.fetchData(endpoint);
  }
}
