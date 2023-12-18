class AuthService {
    static users = []; 
  
    static register(user) {
      this.users.push(user);
    }
  
    static login(username, password) {
      const user = this.users.find((u) => u.username === username && u.password === password);
      return user;
    }
  
  }
  
  export default AuthService;