import AppError from './AppError';

class BadRequestError extends ForbidError {
  constructor(message) {
    super(message, 403);
  }
}

export default ForbidError;
