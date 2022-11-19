module.exports = {
    API_BASE_URL: process.env.API_BASE_URL || '',
    API_USERNAME: process.env.API_USERNAME || '',
    API_PASSWORD: process.env.API_PASSWORD || '',
    MEMBER_ID: process.env.MEMBER_ID || 75,
    CACHE_MAX_SIZE: process.env.CACHE_MAX_SIZE || 50,
    CACHE_MAX_AGE_IN_S: process.env.CACHE_MAX_AGE_IN_S || 60 * 60,
}
