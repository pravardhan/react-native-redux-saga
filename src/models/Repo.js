import User from './User';
export default class Repo {
    constructor(repo){
        this.fullName = repo.full_name;
        this.language = repo.language;
        this.description = repo.description;
        this.owner = new User(repo.owner);
    }
}