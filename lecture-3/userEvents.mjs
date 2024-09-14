import * as Events from "events"
// const EventsEmitter=require('events');

export class UserEvents extends Events.EventEmitter{

    // events
    createPost(content){
        console.log("Post is created");
        this.emit("postCreated");
    }
}


