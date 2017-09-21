import { Beach } from './beach';

export class Session {
    id: string;
    date: string;
    description: string;
    duration: number;
    rating: number;
    beachId: number;
    userId: number;

    constructor(id: string,
                description: string,
                date: string,
                duration: number,
                rating: number,
                beachId: number) {
        this.id = id;
        this.description = name;
        this.date = date;
        this.duration = duration;
        this.rating = rating;
        this.beachId = beachId;
    }
}
