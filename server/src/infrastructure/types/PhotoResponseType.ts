/**
 * The PhotoApiResponseType property type of results[]
 * @typedef {object} PhotoResponseType
 * @property {number} width.required
 * @property {number} height.required
 * @property {string} color.required
 * @property {UrlsType} urls.required
 */
export type PhotoResponseType = {
    "width": number,
    "height": number,
    "color": string,
    "urls": UrlsType,
}

/**
 * The PhotoResponseType property type of urls
 * @typedef {object} UrlsType
 * @property {string} raw.required
 * @property {string} full.required
 * @property {string} regular.required
 * @property {string} small.required
 * @property {string} thumb.required
 */
type UrlsType = {
    "raw": string,
    "full": string,
    "regular": string,
    "small": string,
    "thumb": string
}