import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';


const max_time = 30000;
@Injectable()
export class RequestCache {

  constructor() { }

  cache = new Map();

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url  = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return;
    }

    const isExpired = cached.lastRead < (Date.now() - max_time);
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, res: HttpResponse<any>): void {
    const url = req.url;
    const entry = {url, res, lastRead: Date.now()};

    this.cache.set(url, entry);

    //Clean cache
    this.cache.forEach( cachedResponse => {
      if (cachedResponse.lastRead < max_time) {
        this.cache.delete(cachedResponse)
      }
    })
  }
}
