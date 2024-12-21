class UserService {
    constructor() {
      this.user = {
        name: 'AGNE',
        firstname: 'MOUSSA'
      };
    }

    static getInstance() {
      if (!UserService.instance) {
        UserService.instance = new UserService();
      }
      return UserService.instance;
    }
  }
  
  export default UserService.getInstance();