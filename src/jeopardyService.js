//import the axios HTTP client to communicate with the API
import axios from 'axios';
class JeopardyService {
    constructor(url = 'http://jservice.io/api/random', client = axios.create()){
        this.url = url;
        this.client = client;
    }

    //Used in Normal and Medium Mode only.
    getQuestion(){
        return this.client.get(this.url);
    }

    //Used in Hard Mode only.
    get3Questions(){
        return this.client.get(this.url + "?count=3");
    }
}
export default JeopardyService;