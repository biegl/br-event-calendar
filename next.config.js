/** @type {import('next').NextConfig} */

const appConfig = require('./config/app.config')
const publicRuntimeConfig = {
    ...appConfig,
}

require('dotenv').config()

const nextConfig = {
    publicRuntimeConfig,
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
