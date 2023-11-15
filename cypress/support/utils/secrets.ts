import {pbkdf2Sync} from 'crypto';

const seed = Cypress.env('PWD_SEED');

export default class Secrets {
  private static iterations: number = 1000;
  private static keylen: number = 16;
  private static digest: string = 'sha512';

  public static getPassword(userName: string): string {
    const buffer = pbkdf2Sync(seed, userName, Secrets.iterations, Secrets.keylen, Secrets.digest);
    return buffer.toString('hex');
  }
}
