import { Beach } from './beach';
import { Condition } from './condition';

export class Session {
    id: string;
    date: Date;
    description: string;
    duration: number;
    rating: number;
    beach: Beach;
    beachId: number;
    userId: string;
    condition: Condition;

    constructor(id: string,
                description: string,
                date: Date,
                duration: number,
                rating: number,
                beach: Beach) {
        this.id = id;
        this.description = name;
        this.date = date;
        this.duration = duration;
        this.rating = rating;
        this.beach = beach;
    }
}
