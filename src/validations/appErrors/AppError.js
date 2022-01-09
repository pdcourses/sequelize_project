class AppError extends Error{
    constructor(message, status) {
        super();
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;        
    }
}
export default AppError;