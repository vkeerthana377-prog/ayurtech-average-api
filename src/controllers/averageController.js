import { addNumber } from "../services/averageService.js";

/**
 * Handles POST /average requests.
 *
 * @param {import("express").Request} req - Express request object.
 * @param {import("express").Response} res - Express response object.
 * @returns {void}
 */
export function calculateAverage(req, res) {
  const { number } = req.body;

  if (typeof number !== "number" || !Number.isFinite(number)) {
    return res.status(400).json({
      error: "number must be a finite number"
    });
  }

  const average = addNumber(number);

  return res.status(200).json({
    average
  });
}