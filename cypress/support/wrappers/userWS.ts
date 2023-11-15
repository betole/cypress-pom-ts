import {fakerEN_US as faker} from '@faker-js/faker';

export default class UserWS {
  public userName: string;
  public firstName: string;
  public lastName: string;
  public avatar: string;
  public password?: string | undefined;

  constructor(password?: string) {
    this.userName = faker.internet.userName();
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.avatar = faker.internet.avatar();
    if (password) this.password = password;
  }
}
