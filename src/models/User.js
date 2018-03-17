export default class User {
    constructor(user){
        this.login = user.login;
        this.avatar = user.avatar_url;
        this.followers = user.followers;
        this.following = user.following;
    }
}