import { UserAuth } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class BlogUserEntity implements UserAuth, Entity<string> {
  public id?: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public avatar?: string;
  public registeredAt: Date;
  public passwordHash: string;

  constructor(user: UserAuth) {
    this.populate(user)
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      avatar: this.avatar,
      registeredAt: this.registeredAt,
      passwordHash: this.passwordHash,
    };
  }

  public populate(data: UserAuth): void {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.avatar = data.avatar;
    this.registeredAt = data.registeredAt;
  }

}
