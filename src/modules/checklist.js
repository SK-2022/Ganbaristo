//Remember SOLID principles

export default class ChecklistItem {
    constructor(title, done) {
        this.title = title,
        this.done = done
    } 

    toggleDone() {
        this.done = !this.done
    }

    isDone(){
        return this.done
    }
}