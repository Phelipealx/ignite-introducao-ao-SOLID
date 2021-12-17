import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const callBack = this.showUserProfileUseCase.execute({ user_id: request.params.user_id })
      return response.json(callBack);
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}

export { ShowUserProfileController };
