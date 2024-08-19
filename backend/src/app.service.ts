import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AppService {
  private readonly baseUrl = "https://swapi.py4e.com/api";

  constructor(private readonly httpService: HttpService) {}
  async fetchData(endpoint: string) {
    const url = `${this.baseUrl}/${endpoint}`;
    const response = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }

  async getHello() {
    return "Hello World!";
  }
}
