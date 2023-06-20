import Mailjet from "node-mailjet"

export const mailjetTemplates = {
  reservationComplete: 4890390,
  userVerification: 4890493,
  workerVerification: 4890493,
  resetPassword: 4890698,
}

export const mailjet = Mailjet.connect(
  process.env.MAILJET_API_PUBLIC_KEY,
  process.env.MAILJET_API_SECRET_KEY
)
