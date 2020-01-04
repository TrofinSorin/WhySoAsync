export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  access_token?: string;
}

export interface UserJson {
  id: number;
  name: string;
  userType: string;
  selected?: boolean;
  showUpdateForm?: boolean;
}
