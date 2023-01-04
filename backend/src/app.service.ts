import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Your home!';
  }

   getBasic():string {
    return 'your at basic page';
  }

  getBeginner():string {
    return 'your at beginner page';
  }

    getIntermediate():string {
    return 'your at intermediate page';
  }

    getExpert():string {
      return 'your at expert page';
    }
}
