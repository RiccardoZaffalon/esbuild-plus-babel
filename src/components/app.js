import axios from 'axios';

export default class {
    async init() {
        const { data } = await axios(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        console.log(data);
    }
}
