/**
 * The type for request body for a mail endpoint
 * @typedef {object} MailBodyRequestType
 * @property {string} name.required 
 * @property {string} email.required
 * @property {string} message.required
 */
export type MailBodyRequestType = {
    name: string,
    email: string,
    message: string
};
